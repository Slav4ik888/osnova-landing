import getHeaderHtml from './get-header-html.js';
import getAnswerElement from './get-answer-element.js';
import { createElement } from '../utils/display/index.js';
import { getAnswerId, getId } from './utils.js';


export default function getQuestion({ question, answer }, idx) {
  const id = getId(idx); 

  const $question = createElement(`div`, `qa-question-box`);
  $question.id = id;

  const headerHTML = getHeaderHtml(question, idx);
  $question.insertAdjacentHTML(`beforeend`, headerHTML);

  const $answer = getAnswerElement(answer);
  $answer.classList.add(`collapse`);
  $answer.id = getAnswerId(id);
  $question.insertAdjacentElement(`beforeend`, $answer);

  return $question;
}
