import { Node } from 'slate';
import { TNode } from '../types/TNode';

/**
 * Check if a value is a list of `Node` objects.
 */
export const isNodeList = (value: any): value is TNode[] =>
  Node.isNodeList(value);
