import data from './data.js';

export const slidesCount   = data.length;
export const SLIDE_LENGTH  = 515;
export const SPACE_BETWEEN = 112;
export const SLIDE_WITH_SPACE_LENGTH     = SLIDE_LENGTH + SPACE_BETWEEN;
export const MAIN_SLIDE_WITH_SPACE_WIDTH = SLIDE_LENGTH + SPACE_BETWEEN * 2;

export const MAX_WIDTH           = 1230;
export const CLIENT_WIDTH        = document.documentElement.clientWidth;
export const START_SLIDE         = CLIENT_WIDTH >= MAX_WIDTH ? 1 : 0;
export const START_ACTIVE_LENGTH = CLIENT_WIDTH >= MAX_WIDTH ? SLIDE_WITH_SPACE_LENGTH : 0;

/**
 * Расстояние в px для прокрутки до последнего слайда
 */
export const LAST_SLIDE_LENGTH = (-1) * SLIDE_WITH_SPACE_LENGTH * (slidesCount - 1 - START_SLIDE);

export const cl = {
  slider   : `s11-slider`,
  slide    : `s11-slide`,
  leftBtn  : `s11-lister-left`,
  rightBtn : `s11-lister-right`,
  disabled : `s11-disabled`
};
