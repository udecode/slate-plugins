export const fontAppCode = `import 'tippy.js/dist/tippy.css';
import React, { CSSProperties } from 'react';
import { Check } from '@styled-icons/material/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import {
  ColorPickerToolbarDropdown,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createPlateUI,
  HeadingToolbar,
  MARK_BG_COLOR,
  MARK_COLOR,
  Plate,
} from '@udecode/plate';
import { basicNodesPlugins } from './basic-nodes/basicNodesPlugins';
import { editableProps } from './common/editableProps';
import { fontValue } from './font/fontValue';
import { createMyPlugins, MyValue } from './typescript/plateTypes';

const styles: Record<string, CSSProperties> = {
  copyWrapper: {
    borderBottom: '1px solid #eee',
    margin: '0 -16px',
    padding: '0 16px 16px',
  },
  copy: {
    color: '#f92672',
  },
};

const tooltips = {
  color: { content: 'Text color' },
  bg: { content: 'Highlight color' },
};

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
  ],
  {
    components: createPlateUI(),
  }
);

const CopyContent = () => (
  <div style={styles.copyWrapper}>
    <span style={styles.copy}>Copy Me in the editor</span>
  </div>
);

export default () => (
  <>
    <HeadingToolbar>
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
        tooltip={tooltips.color}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
        tooltip={tooltips.bg}
      />
    </HeadingToolbar>

    <CopyContent />

    <Plate<MyValue>
      editableProps={editableProps}
      initialValue={fontValue}
      plugins={plugins}
    />
  </>
);
`;

export const fontAppFile = {
  '/FontApp.tsx': fontAppCode,
};
