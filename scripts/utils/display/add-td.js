import { createElement } from './index.js';

export const addTd = (elem, className = ``, value, edit) => {
  if (edit === false) return ``

  const $td = createElement(`td`, `result-strip-item`);
  if (className) $td.classList.add(className);

  $td.textContent = value;
  elem.insertAdjacentElement(`beforeend`, $td);
};