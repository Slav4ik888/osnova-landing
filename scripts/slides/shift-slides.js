
/**
 * Shift all slides on actLength
 * @param {nodes} $allSlides 
 * @param {number} actLength
 */
export default function shiftSlides($allSlides, actLength) {
  $allSlides.forEach($slide => $slide.style.transform = `translateX(${actLength}px)`);
}
