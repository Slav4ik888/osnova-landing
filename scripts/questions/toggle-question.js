import { getAnswerId, isClass, calcStep } from './utils.js';

const delay  = 2;


export default function toggleQuestion(e) {
  const id = e.target.closest(`.qa-question-box`)?.id;
  console.log(`id: `, id);
  const $answer = document.getElementById(getAnswerId(id));
  console.log('$answer.classList.value: ', $answer.classList.value);

  if (isClass($answer, `collapse`)) {
    
    
    $answer.classList.remove(`collapse`);
    const height = $answer.clientHeight;
    $answer.style.overflow = `hidden`;

    const step    = calcStep(height);
    let remainder = step;

    let timerId = setTimeout(function request() {

      remainder += step;

      if (remainder < height) {
        $answer.style.height = remainder + `px`;
        timerId = setTimeout(request, delay);
      }
      else {
        $answer.style.height = `max-content`;
        $answer.style.overflow = null;
      }
    }, delay);
  }
  else {
    $answer.style.overflow = `hidden`;
    const height  = $answer.clientHeight;
    const step    = calcStep(height);

    let remainder = height - step;
      
    let timerId = setTimeout(function request() {
        
      remainder -= step;

      if (remainder > 0) {
        $answer.style.height = remainder + `px`;
        timerId = setTimeout(request, delay);
      }
      else {
        $answer.classList.add(`collapse`);
        $answer.style.height = null;
        $answer.style.overflow = null;
      }
    }, delay);
  }
}
