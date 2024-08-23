import { createSlatePlugin } from '@udecode/plate-common';

import { withBlockquote } from './withBlockquote';

/** Enables support for block quotes, useful for quotations and passages. */
export const BlockquotePlugin = createSlatePlugin({
  isElement: true,
  key: 'blockquote',
  parsers: {
    html: {
      deserializer: {
        rules: [
          {
            validNodeName: 'BLOCKQUOTE',
          },
        ],
      },
    },
  },
  withOverrides: withBlockquote,
});