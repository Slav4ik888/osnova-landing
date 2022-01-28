import { getCloseId, getId } from './utils.js';

export default function getHeaderHtml(question, idx) {
  const id = getCloseId(getId(idx));

  return `
    <div class="qa-header">
      <div class="qa-question">${question || ``}</div>
      <div class="qa-close" id="${id}"></div>
    </div>
  `
}
