import displaySlide from './display-slide.js';


export default function displaySlides($slider, slides) {

  
  slides.forEach((slide, idx) => displaySlide($slider, slide));
} 
