import { getNode } from '../utils/display/index.js';
import getSlideHTML from './get-slide-html.js';
import displaySlides from './display-slides.js';
import data from './data.js';
import { disabled } from './disabled.js';
import { START_SLIDE, cl } from './config.js';
import { getShiftLeft } from './calculates.js';


export default function initialize() {

  const $slider = getNode(`.${cl.slider}`);
  const { marginLeft, width } = getShiftLeft();
  $slider.style.width      = width;
  $slider.style.marginLeft = marginLeft;

  const slides = data?.map(item => getSlideHTML(item));

  displaySlides($slider, slides);
  disabled(START_SLIDE, `remove`);
}
