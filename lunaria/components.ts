import { html } from '@lunariajs/core';

export const TitleParagraph = () =>
  html`<p>
      If you're interested in helping us translate
      <a href="https://tauri.app">tauri.app</a> into one of the languages listed below, you've come
      to the right place! This auto-updating page always lists all the content that could use your
      help right now.
    </p>

    <p>
      Read the
      <a href="https://github.com/tauri-apps/tauri-docs/blob/v2/.github/TRANSLATING.md"
        >Translations Guide</a
      >
      for how to translate a document. Before starting a new translation, be sure to check the
      <a href="#needs-review">existing Tauri Docs PRs</a> to see if this page has already been
      translated, and consider reviewing any open PRs in your language!
    </p>`;

export function TranslationNeedsReview() {
  return `
    <h2 id="needs-review"><a href="#needs-review">Translations that need reviews</a></h2>

    <need-review-element></need-review-element>
    <script nonce="abc123">
      class NeedReviewElement extends HTMLElement {
        url = 'https://api.github.com/repos/tauri-apps/tauri-docs/pulls?state=open&per_page=100';
        constructor() {
          super();

          const shadowRoot = this.attachShadow({ mode: 'open' });
          const style = 'a{color: var(--theme-accent);text-decoration: none;}a:hover { text-decoration: underline;color: var(--theme-text-bright);}'
          this.getPullRequestData().then((data) => {
            let list = data.filter((pr) => pr.labels.find((label) => label.name === 'i18n'))
            let bodyHtml = this.renderLiElements(list);
            shadowRoot.innerHTML = ['<style>', style, '</style>', '<ul>', bodyHtml, '</ul>'].join(" ");
          }).catch(()=>{
            shadowRoot.innerHTML = '<ul></ul>';
          });
        }

        async getPullRequestData() {
          const response = await fetch(this.url);
          const json = await response.json();
          if (!response.ok) {
            throw new Error(
              'GitHub API call failed: GET "' + this.url + '" returned status' + response.status + ':' + JSON.stringify(json)
            );
          }
          return json || [];
        }

        renderLiElements(prs) {
          let lines = prs.map((pr) => {
            const title = pr.title.replace(/\`/g, '');
            return '<li>' + this.renderLink(pr.html_url, title) + '</li>';
          });
          return lines?.join('') || '';
        }
        renderLink(href, text, className = '') {
          return '<a href="' + href + '" class="' + className + '" target="_blank" rel="noopener noreferrer">' + text + '</a>';
        }
      }
      customElements.define('need-review-element', NeedReviewElement);
    </script>
  `;
}
