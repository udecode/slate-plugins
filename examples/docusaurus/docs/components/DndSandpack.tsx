import React from 'react';
import { commonDeps, plateTestUtilsDeps } from '../sandpack/code-deps';
import { CommonSandpack } from '../sandpack/CommonSandpack';
import { basicElementsPluginsFile } from '../sandpack/files/basic-elements/code-basicElementsPlugins';
import { basicMarksPluginsFile } from '../sandpack/files/basic-marks/code-basicMarksPlugins';
import { basicNodesFiles } from '../sandpack/files/basic-nodes/code-basicNodesFiles';
import { dndAppCode } from '../sandpack/files/code-DndApp';
import { commonFiles } from '../sandpack/files/common/code-commonFiles';
import { dndFiles } from '../sandpack/files/dnd/code-dndFiles';
import { exitBreakPluginFile } from '../sandpack/files/exit-break/code-exitBreakPlugin';
import { resetBlockTypePluginFile } from '../sandpack/files/reset-node/code-resetBlockTypePlugin';
import { softBreakPluginFile } from '../sandpack/files/soft-break/code-softBreakPlugin';
import { typescriptFiles } from '../sandpack/files/typescript/code-typescriptFiles';

export const DndSandpack = () => (
  <CommonSandpack
    height={722}
    previewSize={7}
    deps={{
      ...commonDeps,
      ...plateTestUtilsDeps,
    }}
    appCode={dndAppCode}
    files={{
      ...dndFiles,
      ...basicNodesFiles,
      ...basicElementsPluginsFile,
      ...basicMarksPluginsFile,
      ...exitBreakPluginFile,
      ...resetBlockTypePluginFile,
      ...softBreakPluginFile,
      ...commonFiles,
      ...typescriptFiles,
    }}
  />
);
