import { createElement } from '../utils/display/index.js';
import putAnswerItemInElement from './put-answer-item-element.js';


export default function getAnswerElement(answer) {
  if (!answer?.length) return ``;

  const $answer = createElement(`div`, `qa-answer`);

  answer?.forEach(answerItem => {
    putAnswerItemInElement(answerItem, $answer);
  });

  return $answer
}
