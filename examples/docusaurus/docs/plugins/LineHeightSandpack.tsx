import React from 'react';
import {
  commonDeps,
  plateTestUtilsDeps,
  toolbarDeps,
} from '../sandpack/code-deps';
import { CommonSandpack } from '../sandpack/CommonSandpack';
import { basicElementsPluginsFile } from '../sandpack/files/basic-elements/code-basicElementsPlugins';
import { basicMarksPluginsFile } from '../sandpack/files/basic-marks/code-basicMarksPlugins';
import { basicNodesFiles } from '../sandpack/files/basic-nodes/code-basicNodesFiles';
import { lineHeightAppCode } from '../sandpack/files/code-LineHeightApp';
import { commonFiles } from '../sandpack/files/common/code-commonFiles';
import { lineHeightFiles } from '../sandpack/files/line-height/code-lineHeightFiles';
import { typescriptFiles } from '../sandpack/files/typescript/code-typescriptFiles';

export const LineHeightSandpack = () => (
  <CommonSandpack
    height={722}
    previewSize={8}
    deps={{
      ...commonDeps,
      ...plateTestUtilsDeps,
      ...toolbarDeps,
    }}
    appCode={lineHeightAppCode}
    files={{
      ...lineHeightFiles,
      ...basicNodesFiles,
      ...basicElementsPluginsFile,
      ...basicMarksPluginsFile,
      ...commonFiles,
      ...typescriptFiles,
    }}
  />
);
