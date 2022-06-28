import React from 'react';
import { createPlateUI, Plate } from '@udecode/plate';
import { basicNodesPlugins } from './basic-nodes/basicNodesPlugins';
import { editableProps } from './common/editableProps';
import { createPreviewPlugin } from './preview-markdown/createPreviewPlugin';
import { PreviewLeaf } from './preview-markdown/PreviewLeaf/PreviewLeaf';
import { previewMdValue } from './preview-markdown/previewMdValue';
import { createMyPlugins, MyValue } from './typescript/plateTypes';

const plugins = createMyPlugins([...basicNodesPlugins, createPreviewPlugin()], {
  components: createPlateUI(),
});

const _editableProps = {
  ...editableProps,
  renderLeaf: PreviewLeaf as any,
};

export default () => (
  <Plate<MyValue>
    editableProps={_editableProps}
    plugins={plugins}
    initialValue={previewMdValue}
  />
);
