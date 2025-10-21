/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { JSX as JSXAstro } from 'astro/jsx-runtime';

declare global {
  namespace JSX {
    type Element = JSXAstro.Element;
    interface ElementChildrenAttribute extends JSXAstro.ElementChildrenAttribute {}
    interface IntrinsicElements extends JSXAstro.IntrinsicElements {}
  }
}
