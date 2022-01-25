import getSlideHTML from './get-slide-html.js';
import displaySlides from './display-slides.js';
import data from './data.js';
import { getNode, getNodes } from '../utils/display/index.js';
import { SLIDE_LENGTH, LAST_SLIDE_LENGTH, slidesCount, cl } from './config.js';
import shiftSlides from './shift-slides.js';
import { disabled } from './disabled.js';
 
// INITIALIZE

let
  actSlideIdx = 1,
  actLength   = 0;

const $slider = getNode(`.${cl.slider}`);
const slides = data?.map(item => getSlideHTML(item));

const order = {
  // prev   : 2,
  first  : 0,
  second : 1,
  third  : 2,
  // next   : 0
};

displaySlides($slider, slides, order);
disabled(1, `remove`);

const $allSlides = getNodes(`.${cl.slide}`);

// LISTENER

const
  $fbLeftBtn  = getNode(`.${cl.leftBtn}`),
  $fbRightBtn = getNode(`.${cl.rightBtn}`);


$fbLeftBtn.addEventListener(`click`, changeSlides);
$fbRightBtn.addEventListener(`click`, changeSlides);


function changeSlides(e) {
  let
    direction = ``,
    lastIdx = actSlideIdx;

  
  if (e.target.closest(`#left`)) {
    direction = `left`;
    actSlideIdx--;

    if (actSlideIdx < 0) {
      actSlideIdx = slidesCount - 1;
      actLength = LAST_SLIDE_LENGTH;
    }
    else {
      actLength += SLIDE_LENGTH;
    }
  }
  else if (e.target.closest(`#right`)) {
    direction = `right`;
    actSlideIdx++;

    if (actSlideIdx === slidesCount) {
      actSlideIdx = 0;
      actLength = SLIDE_LENGTH;
    }
    else {
      actLength -= SLIDE_LENGTH;
    }
  }
  
  disabled(lastIdx);
  disabled(actSlideIdx, `remove`);

  shiftSlides($allSlides, actLength);
}
