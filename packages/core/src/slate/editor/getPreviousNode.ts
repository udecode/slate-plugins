import { Editor } from 'slate';
import { Modify } from '../../common/types/utility/types';
import { TEditor, Value } from '../types/TEditor';
import { ENode, TNode, TNodeMatch } from '../types/TNode';
import { TNodeEntry } from '../types/TNodeEntry';

export type GetPreviousNodeOptions<V extends Value, N extends TNode> = Modify<
  NonNullable<Parameters<typeof Editor.previous>[1]>,
  {
    match?: TNodeMatch<N & ENode<V>>;
  }
>;

/**
 * Get the matching node in the branch of the document before a location.
 */
export const getPreviousNode = <V extends Value, N extends TNode>(
  editor: TEditor<V>,
  options?: GetPreviousNodeOptions<V, N>
): TNodeEntry<N & ENode<V>> | undefined =>
  Editor.previous(editor as any, options as any) as any;
