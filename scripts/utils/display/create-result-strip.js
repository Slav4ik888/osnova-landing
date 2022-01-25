import { addTd, createElement } from './index.js';


export const createResultStrip = (resMessage, edit) => {

  const $tr = createElement(`tr`);

  addTd($tr, ``,            resMessage.date);
  addTd($tr, `user-name`,   resMessage.user);
  addTd($tr, `user-name`,   resMessage.from,       edit);
  addTd($tr, ``,            resMessage.fromId,     edit);
  addTd($tr, ``,            resMessage.result);
  addTd($tr, `origin-text`, resMessage.originText, edit);
  
  return $tr;
}