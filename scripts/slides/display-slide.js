import { createElement } from '../utils/display/index.js';
import { SLIDE_LENGTH, cl } from './config.js';
import { disabled } from './disabled.js';


/**
 * Display one slide
 * @param {node} $slider 
 * @param {string} slide html code
 * @param {number} idx 
 * @param {boolean} isDisabled 
 * @param {boolean} prev 
 */
export default function displaySlide($slider, slide, idx, isDisabled, prev) {
  const $slide = createElement(`div`, cl.slide);
  $slide.insertAdjacentHTML(`beforeend`, slide);

  // if (prev) $slide.style.marginLeft = `-${SLIDE_LENGTH}px`;
  // if (isDisabled) $slide.insertAdjacentHTML(`beforeend`, `<div class="slide-disable ${cl.disabled}"></div>`);
  

  $slider.insertAdjacentElement(`beforeend`, $slide);
  
  // if (!isDisabled) disabled(idx, `remove`);
}
