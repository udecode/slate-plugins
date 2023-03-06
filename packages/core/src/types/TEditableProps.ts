import { Value } from '@udecode/slate';
import { ENodeEntry, RenderLeafFn } from '@udecode/slate-utils/src';
import { Range } from 'slate';
import { EditableProps } from 'slate-react/dist/components/editable';
import { RenderElementFn } from './TRenderElementProps';

export type TEditableProps<V extends Value = Value> = Omit<
  EditableProps,
  'decorate' | 'renderElement' | 'renderLeaf'
> & {
  decorate?: (entry: ENodeEntry<V>) => Range[];
  renderElement?: RenderElementFn<V>;
  renderLeaf?: RenderLeafFn<V>;
};
