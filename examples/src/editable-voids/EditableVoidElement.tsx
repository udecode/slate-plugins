import React, { CSSProperties, useState } from 'react';
import {
  createBasicElementsPlugin,
  createExitBreakPlugin,
  createPlateUI,
  createResetNodePlugin,
  createSoftBreakPlugin,
  Plate,
  PlateRenderElementProps,
  TElement,
} from '@udecode/plate';
import { editableProps } from '../common/editableProps';
import { exitBreakPlugin } from '../exit-break/index';
import { resetBlockTypePlugin } from '../reset-node/index';
import { softBreakPlugin } from '../soft-break/index';
import { createMyPlugins, MyEditor, MyValue } from '../typescript/index';

const plugins = createMyPlugins(
  [
    createBasicElementsPlugin(),
    createResetNodePlugin(resetBlockTypePlugin),
    createSoftBreakPlugin(softBreakPlugin),
    createExitBreakPlugin(exitBreakPlugin),
  ],
  {
    components: createPlateUI(),
  }
);

const styles: Record<string, CSSProperties> = {
  box: { boxShadow: '0 0 0 3px #ddd', padding: '8px' },
  input: { margin: '8px 0' },
  radio: { width: 'unset' },
  editor: { padding: '20px', border: '2px solid #ddd' },
};

export const EditableVoidElement = ({
  attributes,
  children,
}: PlateRenderElementProps<MyValue, TElement>) => {
  const [inputValue, setInputValue] = useState('');

  return (
    // Need contentEditable=false or Firefox has issues with certain input types.
    <div {...attributes} contentEditable={false}>
      <div style={styles.box}>
        <h4>Name:</h4>
        <input
          style={styles.input}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <h4>Left or right handed:</h4>
        <input
          style={styles.radio}
          type="radio"
          name="handedness"
          value="left"
        />{' '}
        Left
        <br />
        <input
          style={styles.radio}
          type="radio"
          name="handedness"
          value="right"
        />{' '}
        Right
        <h4>Tell us about yourself:</h4>
        <div style={styles.editor}>
          <Plate<MyValue, MyEditor>
            id="editable-void-basic-elements"
            plugins={plugins}
            editableProps={editableProps}
            // initialValue={VALUES.basicElements}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
