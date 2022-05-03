import { Transforms } from 'slate';
import { Modify } from '../../common/types/utility/types';
import { NodeMatchOption } from '../types/NodeMatchOption';
import { TEditor, Value } from '../types/TEditor';

export type SplitNodesOptions<V extends Value> = Modify<
  NonNullable<Parameters<typeof Transforms.splitNodes>[1]>,
  NodeMatchOption<V>
>;

/**
 * Split the nodes at a specific location.
 */
export const splitNodes = <V extends Value>(
  editor: TEditor<V>,
  options: SplitNodesOptions<V>
) => Transforms.splitNodes(editor as any, options as any);
