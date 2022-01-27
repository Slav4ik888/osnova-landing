import { getNode } from '../utils/display/index.js';
import data from './data.js';
import getQuestion from './get-question.js';
import toggleQuestion from './toggle-question.js';


const $inPoint = getNode(`.s13-right`);

data?.forEach((item, idx) => {
  const $question = getQuestion(item, idx);
  $question.addEventListener(`click`, toggleQuestion);

  $inPoint.insertAdjacentElement(`beforeend`, $question);
});

