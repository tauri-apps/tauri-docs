import test from 'node:test'
import { strict as assert } from 'node:assert'
import { transformLink } from './index.js'

for (let ext of [`md`, `mdx`]) {
  // Assume trailing slash in all urls
  test(`nonindex to nonindex, same directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_1/nonindex_2.md
    // url: base/dir_1/nonindex/ -> base/dir_1/nonindex_2/
    assert.equal(transformLink(`./nonindex_2.${ext}`, false), `../nonindex_2/`)
    assert.equal(transformLink(`nonindex_2.${ext}`, false), `../nonindex_2/`)
    assert.equal(
      transformLink(`./nonindex_2.${ext}#id`, false),
      `../nonindex_2/#id`
    )
    assert.equal(
      transformLink(`nonindex_2.${ext}#id`, false),
      `../nonindex_2/#id`
    )
  })
  test(`nonindex to nonindex in sibling directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_2/nonindex.md
    // url: base/dir_1/nonindex/ -> base/dir_2/nonindex/
    assert.equal(
      transformLink(`../dir_2/nonindex.${ext}`, false),
      `../../dir_2/nonindex/`
    )
    assert.equal(
      transformLink(`../dir_2/nonindex.${ext}#id`, false),
      `../../dir_2/nonindex/#id`
    )
  })
  test(`nonindex to index in same directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_1/index.md
    // url: base/dir_1/nonindex/ -> base/dir_1/
    assert.equal(transformLink(`./index.${ext}`, false), `../`)
    assert.equal(transformLink(`index.${ext}`, false), `../`)
    assert.equal(transformLink(`./index.${ext}#id`, false), `../#id`)
    assert.equal(transformLink(`index.${ext}#id`, false), `../#id`)
  })
  test(`nonindex to index in different directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_2/index.md
    // url: base/dir_1/nonindex/ -> base/dir_2/
    assert.equal(transformLink(`../dir_2/index.${ext}`, false), `../../dir_2/`)
    assert.equal(
      transformLink(`../dir_2/index.${ext}#id`, false),
      `../../dir_2/#id`
    )
  })
  test(`index to nonindex in same directory`, () => {
    // fs: base/dir_1/index.md -> base/dir_1/nonindex.md
    // url: base/dir_1/ -> base/dir_1/nonindex/
    assert.equal(transformLink(`./nonindex.${ext}`, true), `nonindex/`)
    assert.equal(transformLink(`nonindex.${ext}`, true), `nonindex/`)
    assert.equal(transformLink(`./nonindex.${ext}#id`, true), `nonindex/#id`)
    assert.equal(transformLink(`nonindex.${ext}#id`, true), `nonindex/#id`)
  })
  test(`index to nonindex in nested directory`, () => {
    // fs: base/dir_1/index.md -> base/dir_1/nested/nonindex.md
    // url: base/dir_1/ -> base/dir_1/nested/nonindex/
    assert.equal(
      transformLink(`./nested/nonindex.${ext}`, true),
      `nested/nonindex/`
    )
    assert.equal(
      transformLink(`nested/nonindex.${ext}`, true),
      `nested/nonindex/`
    )
    assert.equal(
      transformLink(`./nested/nonindex.${ext}#id`, true),
      `nested/nonindex/#id`
    )
    assert.equal(
      transformLink(`nested/nonindex.${ext}#id`, true),
      `nested/nonindex/#id`
    )
  })
  test(`nonindex to nonindex in nested directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_1/nested/nonindex.md
    // url: base/dir_1/nonindex/ -> base/dir_1/nested/nonindex/
    assert.equal(
      transformLink(`./nested/nonindex.${ext}`, false),
      `../nested/nonindex/`
    )
    assert.equal(
      transformLink(`nested/nonindex.${ext}`, false),
      `../nested/nonindex/`
    )
    assert.equal(
      transformLink(`./nested/nonindex.${ext}#id`, false),
      `../nested/nonindex/#id`
    )
    assert.equal(
      transformLink(`nested/nonindex.${ext}#id`, false),
      `../nested/nonindex/#id`
    )
  })
  test(`nonindex to index in nested directory`, () => {
    // fs: base/dir_1/nonindex.md -> base/dir_1/nested/index.md
    // url: base/dir_1/nonindex/ -> base/dir_1/nested/
    assert.equal(transformLink(`./nested/index.${ext}`, false), `../nested/`)
    assert.equal(transformLink(`nested/index.${ext}`, false), `../nested/`)
    assert.equal(
      transformLink(`./nested/index.${ext}#id`, false),
      `../nested/#id`
    )
    assert.equal(
      transformLink(`nested/index.${ext}#id`, false),
      `../nested/#id`
    )
  })
  test(`index to index in nested directory`, () => {
    // fs: base/dir_1/index.md -> base/dir_1/nested/index.md
    // url: base/dir_1/ -> base/dir_1/nested/
    assert.equal(transformLink(`./nested/index.${ext}`, true), `nested/`)
    assert.equal(transformLink(`nested/index.${ext}`, true), `nested/`)
    assert.equal(transformLink(`./nested/index.${ext}#id`, true), `nested/#id`)
    assert.equal(transformLink(`nested/index.${ext}#id`, true), `nested/#id`)
  })
  test(`index to index in sibling dir`, () => {
    // fs: base/dir_1/index.md -> base/dir_2/index.md
    // url: base/dir_1/ -> base/dir_2/
    assert.equal(transformLink(`../dir_2/index.${ext}`, true), `../dir_2/`)
    assert.equal(
      transformLink(`../dir_2/index.${ext}#id`, true),
      `../dir_2/#id`
    )
  })
  test(`index to index in parent dir`, () => {
    // fs: base/dir_1/index.md -> base/index.md
    // url: base/dir_1/ -> base/
    assert.equal(transformLink(`../../index.${ext}`, true), `../../`)
    assert.equal(transformLink(`../../index.${ext}#id`, true), `../../#id`)
  })
  test(`index to nonindex in sibling dir`, () => {
    // base/dir_1/index.md -> base/dir_2/nonindex.md
    // url: base/dir_1/ -> base/dir_2/nonindex/
    assert.equal(
      transformLink(`../dir_2/nonindex.${ext}`, true),
      `../dir_2/nonindex/`
    )
    assert.equal(
      transformLink(`../dir_2/nonindex.${ext}#id`, true),
      `../dir_2/nonindex/#id`
    )
  })
  test(`non-md remains untouched`, () => {
    assert.equal(transformLink(`./image.jpg`, false), `./image.jpg`)
    assert.equal(transformLink(`image.jpg`, false), `image.jpg`)
    assert.equal(
      transformLink(`./image.jpg#github-light-mode`, false),
      `./image.jpg#github-light-mode`
    )
    assert.equal(
      transformLink(`image.jpg#github-light-mode`, false),
      `image.jpg#github-light-mode`
    )
  })
  test(`full link remains untouched`, () => {
    assert.equal(
      transformLink(`https://somewhere.com/notes.${ext}`, false),
      `https://somewhere.com/notes.${ext}`
    )
    assert.equal(
      transformLink(`http://somewhere.com/notes.${ext}`, false),
      `http://somewhere.com/notes.${ext}`
    )
  })
}

// not testing index back to self (./index.md in index.md)
