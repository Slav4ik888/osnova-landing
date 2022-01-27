
export default function getHeaderHtml(question) {

  return `
    <div class="qa-header">
      <div class="qa-question">${question || ``}</div>
      <div class="qa-close"></div>
    </div>
  `
}
