import { MAIN_SLIDE_WITH_SPACE_WIDTH, SLIDE_LENGTH, SPACE_BETWEEN, MAX_WIDTH, CLIENT_WIDTH, slidesCount, cl } from './config.js';

export const getShiftLeft = () => {

  let marginLeft = ``;
  let width = ``;

  
  if (CLIENT_WIDTH >= MAX_WIDTH) { // 1333 > 1230 
    const remainderForOneSide = (MAX_WIDTH - MAIN_SLIDE_WITH_SPACE_WIDTH) / 2; // 1230 - 851 = 379 / 2 = 190
    const shift = SLIDE_LENGTH - remainderForOneSide; // 515 - 190
    
    marginLeft = (-1) * shift + `px`; 
    width      = `calc(100% + ${shift}px)`;
  }
  else { // < 1230 
    const remainderForOneSide = (CLIENT_WIDTH - MAIN_SLIDE_WITH_SPACE_WIDTH) / 2 + SPACE_BETWEEN;
    marginLeft = remainderForOneSide + `px`;
    width      = `100%`;
  }
    
  return { marginLeft, width };
};