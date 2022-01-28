import { getNode } from '../utils/display/get-node.js';
import { getAnswerId, getCloseId, isClass, calcStep } from './utils.js';

const delay  = 8;


export default function toggleQuestion(e) {
  const
    id       = e.target.closest(`.qa-question-box`)?.id,
    $answer  = getNode(`#${getAnswerId(id)}`),
    $qaClose = getNode(`#${getCloseId(id)}`);


  if (isClass($answer, `collapse`)) {
    
    $answer.style.overflow = `hidden`;
    $answer.classList.remove(`collapse`);
    $qaClose.classList.add(`open`);

    const
      height = $answer.clientHeight,
      step   = calcStep(height);
      
    let remainder = step;

    let timerId = setTimeout(function expand() {
      remainder += step;

      if (remainder < height) {
        $answer.style.height = remainder + `px`;
        timerId = setTimeout(expand, delay);
      }
      else {
        $answer.style.height = `max-content`;
        $answer.style.overflow = null;
      }
    }, delay);
  }
  else {
    $answer.style.overflow = `hidden`;
    $qaClose.classList.remove(`open`);

    const
      height = $answer.clientHeight,
      step   = calcStep(height);

    let remainder = height - step;
      
    let timerId = setTimeout(function collapse() {
      remainder -= step;

      if (remainder > 0) {
        $answer.style.height = remainder + `px`;
        timerId = setTimeout(collapse, delay);
      }
      else {
        $answer.classList.add(`collapse`);
        $answer.style.height = null;
        $answer.style.overflow = null;
      }
    }, delay);
  }
}
