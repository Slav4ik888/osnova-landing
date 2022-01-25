import data from './data.js';

export const slidesCount = data.length;

export const SLIDE_LENGTH = 627;
/**
 * Расстояние в px для прокрутки до последнего слайда
 */
export const LAST_SLIDE_LENGTH = (() => -SLIDE_LENGTH * (slidesCount - 1 - 1))();

export const cl = {
  slider   : `s11-slider`,
  slide    : `s11-slide`,
  leftBtn  : `s11-lister-left`,
  rightBtn : `s11-lister-right`,
  disabled : `s11-disabled`
};
