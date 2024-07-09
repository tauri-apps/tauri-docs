# Translations (i18n)

Thanks for your interest in helping translate the Tauri docs! Visit the [translation status page](https://v2.tauri.app/contribute/translate-status) to see which docs are ready for translation, need updated, or need reviewed.

To ensure a translation is consistent across multiple contributions, be sure to [communicate with others contributors in the `#docs` channel on Discord](https://discord.com/invite/tauri) and consult with reliable external resources such as [Microsoft terminology search](https://msit.powerbi.com/view?r=eyJrIjoiODJmYjU4Y2YtM2M0ZC00YzYxLWE1YTktNzFjYmYxNTAxNjQ0IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9) during translation.

## Enabling a Language

If you seek to contribute but find your language missing please let us know in https://github.com/tauri-apps/tauri-docs/issues/1611. Once we have enough support for a particular language then we'll be able to enable it with the community's support.

### Maintainer Checklist for Adding New Languages

- Update https://github.com/tauri-apps/tauri-docs/blob/v2/locales.json
- Update https://github.com/tauri-apps/tauri-docs/blob/v2/.github/labeler.yml

## Starting a Translation

Before you start working on a translation, look through the [open pull requests](https://v2.tauri.app/contribute/translate-status#needs-review) to see if anyone else is already working on the page for that language.

If that page isn't in the list, then now it's time for you to lead the effort! So here's how to start:

1. Head to [translation status page](https://v2.tauri.app/contribute/translate-status).
2. Look for missing translation in corresponding languages.
3. Make sure no one else has been working on the corresponding page.
4. Click `Create page +` which will help you automagically fork the repository and create the corresponding page. You might want to copy the contents of English page as a starting point.
5. Translate the page following the [translation guidelines](#translation-guidelines).
6. Once your translation is done, initiate a pull request.

Note that you may submit a draft pull request before your translation is complete: e.g., you may want to ask for help with translations or simply indicate to others that you're already translating a specific page. However, your pull request will not be merged until the translation is complete.

## Updating a Translation

### Corrections

If you notice spelling or grammar errors, typos, or opportunities for better phrasing, open a pull request with your suggested fix. If you see a problem that you aren't sure of or don't have time to fix, open an issue.

### Broken Links

When broken links are found, try to fix them across all translations. Ideally, only update the linked URLs, so that translation review will not be necessary.

## Translation Guidelines

Here are some guidelines to help with the translation.

**Markdown Formatting**

- [ ] Preserve the Markdown formatting. This includes headers (#, ##, etc.), lists (*, -, 1.), and inline styles like bold, italic, and code.
- [ ] Ensure that links ([link text](URL)) remain functional and direct to the correct locations.
- [ ] Ensure code blocks (triple backticks ```) are unchanged in terms of their syntax and content.
- [ ] Double-check tables, making sure their structure remains intact. Using the Prettier formatter is a great way to do this.

**Terminology**

- [ ] Familiarize yourself with key Tauri terms and ensure they're translated consistently. It may be helpful to look at other, already translated pages as a reference.
- [ ] For some terms, it might be appropriate to keep them in English and provide a translation in parentheses.
- [ ] If a term has no definitive way to translate, be sure to [communicate with others contributors in the `#docs` channel on Discord](https://discord.com/invite/tauri) or through pull request and consult with reliable external resources such as [Microsoft terminology search](https://msit.powerbi.com/view?r=eyJrIjoiODJmYjU4Y2YtM2M0ZC00YzYxLWE1YTktNzFjYmYxNTAxNjQ0IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9).

**Code and Command Examples**

- [ ] Avoid translating code unless it contains explanatory comments. Translated comments should retain the original meaning.
- [ ] Ensure command-line examples remain functional. Only translate the descriptive parts, not the actual commands.

**Link Descriptions**

- [ ] If link descriptions (text that appears when you hover over a link) are present, make sure to translate them, but ensure they still describe the link's destination correctly.

**Consistency**

- [ ] Ensure that the terminology and style are consistent throughout the document.
- [ ] If the document refers to other sections within itself, double-check that these references are accurate post-translation.

**Cultural Considerations**

- [ ] Ensure that examples, metaphors, or idioms are culturally relevant or adapt them so that they are.
- [ ] Avoid terms or examples that might be considered offensive or inappropriate in the target language or culture.

**Images and Alt Text**

- [ ] If the document contains images with text, consider whether the text in the image needs to be translated.
- [ ] Translate the alt text (a description of the image for accessibility purposes) for each image.

**Feedback**

- [ ] If there are parts of the original document that are unclear or might be misunderstood, communicate with the original author or a knowledgeable person to seek clarity.

Remember, the main goal of the translation is to make the content as accessible and clear to the new audience as it was to the original audience. Always prioritize clarity and accuracy.

Thank you for your interest in contributing; we're excited to have you! Reach out on the [`#docs` channel on Discord](https://discord.com/invite/tauri) if you have any questions along the way.
