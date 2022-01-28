import { createElement, addClasses } from "../utils/display/index.js";


export default function putAnswerItemInElement({ text, stylesAnswer, stylesItem, items }, $answer, type) {
  const $answerItem = createElement(`div`, `qa-answer-item`);
  addClasses($answerItem, stylesAnswer);
  
  if (items) {
    const $ul = createElement(`ul`, `qa-answer-ul`);
    $answer.insertAdjacentElement(`beforeend`, $ul);
    items?.forEach(answerItem => putAnswerItemInElement(answerItem, $ul, `li`));
  }
  else {
    const $item = createElement(type === `li` ? `li` : `div`);
    addClasses($item, stylesItem);
    
    $item.textContent = text;
    
    $answerItem.insertAdjacentElement(`beforeend`, $item);
    $answer.insertAdjacentElement(`beforeend`, $answerItem);
  }
}
