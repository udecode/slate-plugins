export const forcedLayoutAppCode = `import React from 'react';
import {
  createNormalizeTypesPlugin,
  createPlateUI,
  createTrailingBlockPlugin,
  ELEMENT_H1,
  Plate,
} from '@udecode/plate';
import { basicNodesPlugins } from './basic-nodes/basicNodesPlugins';
import { editableProps } from './common/editableProps';
import { forcedLayoutValue } from './forced-layout/forcedLayoutValue';
import { trailingBlockPlugin } from './trailing-block/trailingBlockPlugin';
import { createMyPlugins, MyValue } from './typescript/plateTypes';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createTrailingBlockPlugin(trailingBlockPlugin),
    createNormalizeTypesPlugin({
      options: {
        rules: [{ path: [0], strictType: ELEMENT_H1 }],
      },
    }),
  ],
  {
    components: createPlateUI(),
  }
);

export default () => (
  <Plate<MyValue>
    editableProps={editableProps}
    plugins={plugins}
    initialValue={forcedLayoutValue}
  />
);
`;

export const forcedLayoutAppFile = {
  '/ForcedLayoutApp.tsx': forcedLayoutAppCode,
};
