import { Path } from 'slate';
import { AncestorOf } from './TAncestor';
import { ChildOf, DescendantOf } from './TDescendant';
import { TEditor, Value } from './TEditor';
import { ElementOf } from './TElement';
import { ENode, TNode } from './TNode';
import { TextOf } from './TText';

/**
 * `TNodeEntry` objects are returned when iterating over the nodes in a Slate
 * document tree. They consist of the node and its `Path` relative to the root
 * node in the document.
 */
export type TNodeEntry<N extends TNode = TNode> = [N, Path];

/**
 * Node entry from an editor.
 */
export type ENodeEntry<V extends Value> = TNodeEntry<ENode<V>>;

/**
 * Element entry from a node.
 */
export type TElementEntry<N extends TNode = TNode> = TNodeEntry<ElementOf<N>>;

/**
 * Element entry from an editor.
 */
export type EElementEntry<V extends Value> = TElementEntry<TEditor<V>>;

/**
 * Text node entry from a node.
 */
export type TTextEntry<N extends TNode = TNode> = TNodeEntry<TextOf<N>>;

/**
 * Text node entry from an editor.
 */
export type ETextEntry<V extends Value> = TTextEntry<TEditor<V>>;

/**
 * Ancestor entry from a node.
 */
export type TAncestorEntry<N extends TNode = TNode> = TNodeEntry<AncestorOf<N>>;

/**
 * Ancestor entry from an editor.
 */
export type EAncestorEntry<V extends Value> = TAncestorEntry<TEditor<V>>;

/**
 * Descendant entry from a node.
 */
export type TDescendantEntry<N extends TNode = TNode> = TNodeEntry<
  DescendantOf<N>
>;

/**
 * Descendant entry from an editor.
 */
export type EDescendantEntry<V extends Value> = TDescendantEntry<TEditor<V>>;

/**
 * Child node entry from a node.
 */
export type TNodeChildEntry<N extends TNode = TNode> = TNodeEntry<ChildOf<N>>;
