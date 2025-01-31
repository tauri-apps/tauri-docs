import { defineRendererConfig } from '@lunariajs/core';

import { TitleParagraph, TranslationNeedsReview } from './components';

export default defineRendererConfig({
  slots: {
    afterTitle: TitleParagraph,
    afterStatusByLocale: TranslationNeedsReview,
  },
});
