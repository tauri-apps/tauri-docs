import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ExpressiveCodeEngine, pluginTextMarkers } from '@astrojs/starlight/expressive-code';
import { pluginHiddenLines } from './expressive-code-hidden-lines.mjs';

async function render(language: string, code: string, meta = '') {
  const engine = new ExpressiveCodeEngine({ plugins: [pluginTextMarkers(), pluginHiddenLines()] });
  const { renderedGroupContents } = await engine.render({ code, language, meta });
  const block = renderedGroupContents[0].codeBlock;
  return {
    code: block.code,
    marked: block
      .getLines()
      .filter((line) => line.getAnnotations().length)
      .map((line) => line.text),
  };
}

test('hides rustdoc hidden lines and unescapes ##', async () => {
  const { code } = await render(
    'rust',
    '# use tauri::Manager;\n#\nfn main() {\n    ## not hidden\n}\n#[derive(Debug)]'
  );
  assert.equal(code, 'fn main() {\n    # not hidden\n}\n#[derive(Debug)]');
});

test('hides lines around twoslash cut markers', async () => {
  const { code } = await render(
    'ts',
    "import { invoke } from '@tauri-apps/api/core';\n// ---cut---\ninvoke('a');\n// ---cut-after---\nexport {};"
  );
  assert.equal(code, "invoke('a');");
});

test('line ranges count the visible lines', async () => {
  const { marked } = await render(
    'rust',
    '# fn a() {}\nlet a = 1;\n# let hidden = 2;\nlet b = 2;\nlet c = 3;',
    'ins={2-3} {"x":1}'
  );
  assert.deepEqual(marked, ['let a = 1;', 'let b = 2;', 'let c = 3;']);
});

test('leaves other languages alone', async () => {
  const { code } = await render('sh', '# a comment\necho hi');
  assert.equal(code, '# a comment\necho hi');
});
