import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { createStore } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

export type CheckedId =
  | 'heading'
  | typeof ELEMENT_PARAGRAPH
  | typeof ELEMENT_BLOCKQUOTE;

export const categories = [
  {
    id: 'blocks',
    label: 'Blocks',
    children: [
      {
        id: ELEMENT_PARAGRAPH as CheckedId,
        label: 'Paragraph',
        popoverContent:
          'The foundational block in your editor, serving as the default block for text entry',
      },
      {
        id: 'heading' as CheckedId,
        label: 'Heading',
        popoverContent:
          'Structure your content into well-defined sections using up to six different levels of headings.',
      },
      {
        id: ELEMENT_BLOCKQUOTE as CheckedId,
        label: 'Blockquote',
        popoverContent: '',
      },
    ],
  },
];

export const categoryIds = categories.map((item) => item.id);

const defaultCheckedIds = categories.reduce((acc, item) => {
  item.children.forEach((child) => {
    acc[child.id] = true;
  });
  return acc;
}, {} as Record<CheckedId, boolean>);

export const settingsStore = createStore('settings')({
  showSettings: true,

  checkedIds: { ...defaultCheckedIds } as Record<CheckedId, boolean>,
})
  .extendActions((set) => ({
    setCheckedId: (id: CheckedId, checked: boolean) => {
      set.state((draft) => {
        draft.checkedIds[id] = checked;
      });
    },
  }))
  .extendSelectors((get) => ({
    checkedId: (id: CheckedId) => get.checkedIds[id],
  }));
