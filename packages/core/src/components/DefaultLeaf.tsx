import React from 'react';
import { Value } from '../slate/types/TEditor';
import { PlateRenderLeafProps } from '../types/PlateRenderLeafProps';

export const DefaultLeaf = <V extends Value>({
  attributes,
  children,
  text,
  leaf,
  editor,
  nodeProps,
  ...props
}: PlateRenderLeafProps<V>) => (
  <span {...attributes} {...props}>
    {children}
  </span>
);
