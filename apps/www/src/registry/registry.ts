import { Registry } from './schema';

const ui: Registry = [
  {
    name: 'cloud',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      'plate-ui/cloud.tsx',
      'plate-ui/cloud-attachment-element.tsx',
      'plate-ui/cloud-image-element.tsx',
      'plate-ui/cloud-resize-controls.tsx',
      'plate-ui/cloud-status-bar.tsx',
      'plate-ui/cloud-toolbar-buttons.tsx',
    ],
  },
  {
    name: 'code-block-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      'plate-ui/code-block-element.tsx',
      'plate-ui/code-block-element.css',
      'plate-ui/code-block-combobox.tsx',
    ],
  },
  {
    name: 'color-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      'plate-ui/color-dropdown-menu.tsx',
      'plate-ui/color-constants.ts',
      'plate-ui/color-dropdown-menu-items.tsx',
      'plate-ui/color-input.tsx',
      'plate-ui/color-picker.tsx',
      'plate-ui/colors-custom.tsx',
    ],
  },
  {
    name: 'comments-popover',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      'plate-ui/comments-popover.tsx',
      'plate-ui/comment-avatar.tsx',
      'plate-ui/comment-create-form.tsx',
      'plate-ui/comment-item.tsx',
      'plate-ui/comment-more-dropdown.tsx',
      'plate-ui/comment-reply-items.tsx',
      'plate-ui/comment-resolve-button.tsx',
      'plate-ui/comment-value.tsx',
    ],
  },
  {
    name: 'draggable',
    type: 'components:plate-ui',
    dependencies: [
      '@udecode/plate-dnd',
      'react-dnd',
      'react-dnd-html5-backend',
    ],
    registryDependencies: ['tooltip'],
    files: ['plate-ui/draggable.tsx', 'plate-ui/with-draggables.tsx'],
  },
  {
    name: 'emoji-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      'plate-ui/emoji-dropdown-menu.tsx',
      'plate-ui/emoji-icons.tsx',
      'plate-ui/emoji-picker.tsx',
      'plate-ui/emoji-picker-content.tsx',
      'plate-ui/emoji-picker-navigation.tsx',
      'plate-ui/emoji-picker-preview.tsx',
      'plate-ui/emoji-picker-search-and-clear.tsx',
      'plate-ui/emoji-picker-search-bar.tsx',
    ],
  },
  {
    name: 'align-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/align-dropdown-menu.tsx'],
  },
  {
    name: 'avatar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/avatar.tsx'],
  },
  {
    name: 'blockquote-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/blockquote-element.tsx'],
  },
  {
    name: 'button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/button.tsx'],
  },
  {
    name: 'checkbox',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/checkbox.tsx'],
  },
  {
    name: 'code-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/code-leaf.tsx'],
  },
  {
    name: 'code-line-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/code-line-element.tsx'],
  },
  {
    name: 'code-syntax-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/code-syntax-leaf.tsx'],
  },
  {
    name: 'combobox',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/combobox.tsx'],
  },
  {
    name: 'command',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/command.tsx'],
  },
  {
    name: 'comment-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/comment-leaf.tsx'],
  },
  {
    name: 'comment-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/comment-toolbar-button.tsx'],
  },
  {
    name: 'cursor-overlay',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/cursor-overlay.tsx'],
  },
  {
    name: 'dialog',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/dialog.tsx'],
  },
  {
    name: 'dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/dropdown-menu.tsx'],
  },

  {
    name: 'emoji-combobox',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/emoji-combobox.tsx'],
  },
  {
    name: 'emoji-toolbar-dropdown',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/emoji-toolbar-dropdown.tsx'],
  },
  {
    name: 'excalidraw-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/excalidraw-element.tsx'],
  },
  {
    name: 'fixed-toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/fixed-toolbar.tsx'],
  },
  {
    name: 'fixed-toolbar-buttons',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/fixed-toolbar-buttons.tsx'],
  },
  {
    name: 'floating-toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/floating-toolbar.tsx'],
  },
  {
    name: 'floating-toolbar-buttons',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/floating-toolbar-buttons.tsx'],
  },
  {
    name: 'heading-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/heading-element.tsx'],
  },
  {
    name: 'highlight-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/highlight-leaf.tsx'],
  },
  {
    name: 'hr-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/hr-element.tsx'],
  },
  {
    name: 'image-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/image-element.tsx'],
  },
  {
    name: 'indent-list-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/indent-list-toolbar-button.tsx'],
  },
  {
    name: 'indent-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/indent-toolbar-button.tsx'],
  },
  {
    name: 'input',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/input.tsx'],
  },
  {
    name: 'insert-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/insert-dropdown-menu.tsx'],
  },
  {
    name: 'kbd-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/kbd-leaf.tsx'],
  },
  {
    name: 'line-height-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/line-height-dropdown-menu.tsx'],
  },
  {
    name: 'link-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/link-element.tsx'],
  },
  {
    name: 'link-floating-toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/link-floating-toolbar.tsx'],
  },
  {
    name: 'link-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/link-toolbar-button.tsx'],
  },
  {
    name: 'list-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/list-element.tsx'],
  },
  {
    name: 'list-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/list-toolbar-button.tsx'],
  },
  {
    name: 'mark-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/mark-toolbar-button.tsx'],
  },
  {
    name: 'media-embed-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/media-embed-element.tsx'],
  },
  {
    name: 'media-floating-toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/media-floating-toolbar.tsx'],
  },
  {
    name: 'media-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/media-toolbar-button.tsx'],
  },
  {
    name: 'mention-combobox',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/mention-combobox.tsx'],
  },
  {
    name: 'mention-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/mention-element.tsx'],
  },
  {
    name: 'mention-input-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/mention-input-element.tsx'],
  },
  {
    name: 'mode-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/mode-dropdown-menu.tsx'],
  },
  {
    name: 'more-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/more-dropdown-menu.tsx'],
  },
  {
    name: 'outdent-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/outdent-toolbar-button.tsx'],
  },
  {
    name: 'paragraph-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-paragraph'],
    registryDependencies: [],
    files: ['plate-ui/paragraph-element.tsx'],
  },
  {
    name: 'placeholders',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/placeholders.tsx'],
  },
  {
    name: 'popover',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/popover.tsx'],
  },
  {
    name: 'scroll-area',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/scroll-area.tsx'],
  },
  {
    name: 'search-highlight-leaf',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/search-highlight-leaf.tsx'],
  },
  {
    name: 'separator',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/separator.tsx'],
  },
  {
    name: 'table-cell-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/table-cell-element.tsx'],
  },
  {
    name: 'table-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/table-dropdown-menu.tsx'],
  },

  {
    name: 'table-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/table-element.tsx'],
  },
  {
    name: 'table-row-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/table-row-element.tsx'],
  },
  {
    name: 'todo-list-element',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/todo-list-element.tsx'],
  },
  {
    name: 'toggle',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/toggle.tsx'],
  },
  {
    name: 'toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/toolbar.tsx'],
  },
  {
    name: 'tooltip',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-tooltip'],
    registryDependencies: [],
    files: ['plate-ui/tooltip.tsx'],
  },
  {
    name: 'turn-into-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/turn-into-dropdown-menu.tsx'],
  },
];

const example: Registry = [
  {
    name: 'basic-editor-default-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-default-demo.tsx'],
  },
  {
    name: 'basic-editor-handler-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-handler-demo.tsx'],
  },
  {
    name: 'basic-editor-value-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-value-demo.tsx'],
  },
  {
    name: 'basic-plugins-components-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-plugins-components-demo.tsx'],
  },
  {
    name: 'basic-plugins-default-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-plugins-default-demo.tsx'],
  },
  {
    name: 'cloud-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/cloud-demo.tsx'],
  },
  {
    name: 'editable-voids-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editable-voids-demo.tsx'],
  },
  {
    name: 'find-replace-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/find-replace-demo.tsx'],
  },
  {
    name: 'hundreds-blocks-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/hundreds-blocks-demo.tsx'],
  },
  {
    name: 'hundreds-editors-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/hundreds-editors-demo.tsx'],
  },
  {
    name: 'iframe-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/iframe-demo.tsx'],
  },
  {
    name: 'mode-toggle',
    type: 'components:example',
    files: ['example/mode-toggle.tsx'],
  },
  {
    name: 'multiple-editors-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/multiple-editors-demo.tsx'],
  },
  {
    name: 'playground-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/playground-demo.tsx'],
  },
  {
    name: 'preview-md-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/preview-md-demo.tsx'],
  },
  {
    name: 'createPlateUI',
    type: 'components:component',
    external: true,
    files: ['lib/plate/createPlateUI.ts'],
  },
  {
    name: 'globals',
    type: 'components:component',
    external: true,
    files: ['styles/globals.css'],
  },
  {
    name: 'plate-types',
    type: 'components:component',
    external: true,
    files: ['types/plate-types.ts'],
  },
];

export const registry: Registry = [...ui, ...example];
