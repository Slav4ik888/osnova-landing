import { createElement } from "../utils/display/index.js";


export default function putAnswerItemInElement({ text, styles, items }, $answer) {
  const $answerItem = createElement(`div`, `qa-answer-item`);

  if (items) {
    items?.forEach(answerItem => putAnswerItemInElement(answerItem, $answer));
  }
  else {
    const $item = createElement(`div`);
    styles?.forEach(className => $item.classList.add(className));
    $item.textContent = text;
    
    $answerItem.insertAdjacentElement(`beforeend`, $item);
    $answer.insertAdjacentElement(`beforeend`, $answerItem);
  }
}
