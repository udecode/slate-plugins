import {
  ExcalidrawProps,
  LibraryItems,
} from '@excalidraw/excalidraw-next/types/types';
import { Value } from '@udecode/plate-core';
import { StyledElementProps } from '@udecode/plate-styled-components';
import { CSSProp } from 'styled-components';
import { TExcalidrawElement } from '../../types';

export interface ExcalidrawElementStyles {
  excalidrawWrapper: CSSProp;
}

export interface ExcalidrawElementProps<V extends Value>
  extends StyledElementProps<V, TExcalidrawElement, ExcalidrawElementStyles> {
  scrollToContent?: boolean;

  libraryItems?: LibraryItems;

  excalidrawProps?: ExcalidrawProps;
}
