import { cl } from './config.js';


export default function getSlideHTML({ id, title, ul, imgUrl, fio, position, companyLink, company }) {

  const link = companyLink
    ? `<a href="https://da-tele.com/" target="_blank" class="s11-author-link">${companyLink}</a>`
    : company;
  
  let list = ``;
  ul?.forEach(item => list += `<div class="s11-fb-item">${item}</div>`);

  const img = imgUrl ? `<img src="${imgUrl}" alt="fb-author" class="s11-avatar">` : ``;

  const slide = `
    <div class="s11-item">
      <div class="s11-title">${title}</div>
      <div class="s11-feedback">
        ${list}
      </div>

      <div class="s11-author">
        ${img}
        <div class="s11-author-about">
          <div class="s11-fio">${fio}</div>
          <div class="s11-position">${position}&nbsp;${link}</div>
        </div>
      </div>
    </div>
    <div class="slide-disable${id} ${cl.disabled}"></div>
  `;

  return slide;
};
