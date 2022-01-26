import { getNode, getNodes } from '../utils/display/index.js';
import { START_ACTIVE_LENGTH, START_SLIDE, SLIDE_WITH_SPACE_LENGTH, LAST_SLIDE_LENGTH, slidesCount, cl } from './config.js';
import { disabled } from './disabled.js';
import shiftSlides from './shift-slides.js';
import initialize from './initialize.js';


let
  actSlideIdx = START_SLIDE,
  actLength   = 0;


initialize();
const $allSlides = getNodes(`.${cl.slide}`);

// LISTENER

const
  $fbLeftBtn  = getNode(`.${cl.leftBtn}`),
  $fbRightBtn = getNode(`.${cl.rightBtn}`);


$fbLeftBtn.addEventListener(`click`, changeSlides);
$fbRightBtn.addEventListener(`click`, changeSlides);


function changeSlides(e) {
  const 
    left = e.target.closest(`#left`),
    lastIdx = actSlideIdx;

  
  if (left) {
    actSlideIdx--;

    if (actSlideIdx < 0) {
      actSlideIdx = slidesCount - 1;
      actLength = LAST_SLIDE_LENGTH;
    }
    else {
      actLength += SLIDE_WITH_SPACE_LENGTH;
    }
  }
  else if (e.target.closest(`#right`)) {
    actSlideIdx++;

    if (actSlideIdx === slidesCount) {
      actSlideIdx = 0;
      actLength = START_ACTIVE_LENGTH;
    }
    else {
      actLength -= SLIDE_WITH_SPACE_LENGTH;
    }
  }

  disabled(lastIdx);
  disabled(actSlideIdx, `remove`);

  shiftSlides($allSlides, actLength);
}
