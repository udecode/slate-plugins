import React from 'react';
import { Plate, PlateProvider } from '@udecode/plate-common';
import {
  createImagePlugin,
  createMediaEmbedPlugin,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
} from '@udecode/plate-media';
import { createSelectOnBackspacePlugin } from '@udecode/plate-select';

import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { editableProps } from '@/plate/demo/editableProps';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { mediaValue } from '@/plate/demo/values/mediaValue';
import { createMyPlugins, MyValue } from '@/plate/plate.types';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createImagePlugin(),
    createMediaEmbedPlugin(),
    createSelectOnBackspacePlugin({
      options: {
        query: {
          allow: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED],
        },
      },
    }),
  ],
  {
    components: plateUI,
  }
);

export default function MediaApp() {
  return (
    <PlateProvider<MyValue> plugins={plugins} initialValue={mediaValue}>
      <FixedToolbar>
        {/* <ImageToolbarButton> */}
        {/*  <Icons.image /> */}
        {/* </ImageToolbarButton> */}
        {/* <MediaEmbedToolbarButton> */}
        {/*  <Icons.embed /> */}
        {/* </MediaEmbedToolbarButton> */}
      </FixedToolbar>

      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
