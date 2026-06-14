import { defineConfig, type OxfmtConfig } from 'oxfmt';

export default defineConfig<OxfmtConfig>({
  singleQuote: true,
  semi: true,
  quoteProps: 'consistent',
  importOrder: ['<THIRD_PARTY_MODULES>', '', '<TYPES>', '', '^#', '', '^~/', '', '^[./]'],
  importOrderType: 'alphabetically',
  importOrderSeparation: true,
  importOrderMergeOnTrailingNewline: true,
  attributeSort: true,
  sortTailwindcss: {
    stylesheet: './.oxfmt.css',
    functions: ['clsx', 'cn', 'cva'],
    preserveWhitespace: true,
  },
  ignorePatterns: ['dist/**', '.output/**', '.nuxt/**', '*.min.js', '**/*.md'],
});
