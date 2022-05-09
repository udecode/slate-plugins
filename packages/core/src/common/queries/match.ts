import { castArray } from 'lodash';
import { isBlock } from '../../slate/editor/isBlock';
import { TPath } from '../../slate/types/interfaces';
import { TEditor, Value } from '../../slate/editor/TEditor';
import { ENode, TNode } from '../../slate/node/TNode';

export type PredicateObj = Record<string, any | any[]>;
export type PredicateFn<T extends TNode> = (obj: T, path: TPath) => boolean;
export type Predicate<T extends TNode> = PredicateObj | PredicateFn<T>;

/**
 * Match the object with a predicate object or function.
 * If predicate is:
 * - object: every predicate key/value should be in obj.
 * - function: it should return true.
 */
export const match = <T extends TNode>(
  obj: T,
  path: TPath,
  predicate?: Predicate<T>
): boolean => {
  if (!predicate) return true;

  if (typeof predicate === 'object') {
    return Object.entries(predicate).every(([key, value]) => {
      const values = castArray<any>(value);

      return values.includes(obj[key]);
    });
  }

  return predicate(obj, path);
};

/**
 * Extended query options for slate queries:
 * - `match` can be an object predicate where one of the values should include the node value.
 * Example: { type: ['1', '2'] } will match the nodes having one of these 2 types.
 */
export const getQueryOptions = <V extends Value>(
  editor: TEditor<V>,
  options: any
) => {
  return {
    ...options,
    match: (n: ENode<V>, path: TPath) =>
      match(n, path, options.match) && (!options?.block || isBlock(editor, n)),
  };
};
