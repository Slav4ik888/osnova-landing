import displaySlide from './display-slide.js';


export default function displaySlides($slider, slides, { prev, first, second, third, next }) {
  slides.forEach((slide, idx) => displaySlide($slider, slide));
  // displaySlide($slider, slides[prev],   prev,  true, true); // prev
  // displaySlide($slider, slides[first],  0, true);
  // displaySlide($slider, slides[second], 1 );
  // displaySlide($slider, slides[third],  2, true);
  // displaySlide($slider, slides[next],   next,  true); // next
} 
