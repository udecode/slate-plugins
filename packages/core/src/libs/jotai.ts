import { ComponentPropsWithRef } from 'react';
import { atom, Provider, useAtom, useAtomValue } from 'jotai';
// eslint-disable-next-line import/no-unresolved
import { Scope } from 'jotai/core/atom';

export type JotaiProviderProps = ComponentPropsWithRef<typeof Provider>;

export type { Scope };

export const JotaiProvider = Provider;

export { atom, useAtom, useAtomValue };
