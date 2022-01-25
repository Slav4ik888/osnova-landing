import { getNode } from '../utils/display/index.js';
import { cl } from './config.js';


export const disabled = (idx, type) => {
  const remove = type === `remove`;

  const $dis = getNode(`.slide-disable${idx}`);
  if (remove) $dis.classList.remove(cl.disabled)
  else $dis.classList.add(cl.disabled)

  // const $disabledNodes = getNodes(`.slide-disable`);

  // let $disabled;
  // $disabledNodes.forEach((item, i) => {
  //   if (i === idx) $disabled = item;
  // });
    
  // $disabled.classList.remove(cl.disabled);
};
