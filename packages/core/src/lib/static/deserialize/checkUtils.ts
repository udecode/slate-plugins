export const isSlateVoid = (element: HTMLElement) => {
  return element.dataset.slateVoid === 'true';
};

export const isSlateElement = (element: HTMLElement) => {
  return element.dataset.slateNode === 'element';
};

export const isSlateString = (element: HTMLElement) => {
  return element.dataset.slateNode === 'text';
};

export const isSlateLeaf = (element: HTMLElement) => {
  return element.dataset.slateLeaf === 'true';
};

export const isSlateNode = (element: HTMLElement) => {
  return (
    isSlateLeaf(element) ||
    isSlateElement(element) ||
    isSlateVoid(element) ||
    isSlateString(element)
  );
};

export const isSlatePluginElement = (
  element: HTMLElement,
  pluginKey: string
) => {
  return (
    element.dataset.slateNode === 'element' &&
    element.classList.contains(`slate-${pluginKey}`)
  );
};

export const isSlatePluginNode = (element: HTMLElement, pluginKey: string) => {
  return element.classList.contains(`slate-${pluginKey}`);
};

export const getSlateElements = (element: HTMLElement): HTMLElement[] => {
  return Array.from(element.querySelectorAll('[data-slate-node="element"]'));
};