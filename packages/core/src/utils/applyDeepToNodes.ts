import { queryNode } from '../common/queries/index';
import { QueryNodeOptions } from '../common/types/QueryNodeOptions';
import { isAncestor } from '../slate/node/isAncestor';
import { NodeOf, TNode } from '../slate/types/TNode';
import { TNodeEntry } from '../slate/types/TNodeEntry';

export interface ApplyDeepToNodesOptions<N extends TNode> {
  // The destination node object.
  node: N;
  // The source object. Can be a factory.
  source: Record<string, any> | (() => Record<string, any>);
  // Function to call on each node following the query.
  apply: (
    node: NodeOf<N>,
    source: Record<string, any> | (() => Record<string, any>)
  ) => void;
  // Query to filter the nodes.
  query?: QueryNodeOptions<NodeOf<N>>;
}

/**
 * Recursively apply an operation to children nodes with a query.
 */
export const applyDeepToNodes = <N extends TNode>({
  node,
  source,
  apply,
  query,
}: ApplyDeepToNodesOptions<N>) => {
  const entry: TNodeEntry<N> = [node, []];

  if (queryNode<N>(entry, query)) {
    if (source instanceof Function) {
      apply(node, source());
    } else {
      apply(node, source);
    }
  }

  if (!isAncestor(node)) return;

  node.children.forEach((child) => {
    applyDeepToNodes({
      node: child as any,
      source,
      apply,
      query,
    });
  });
};
