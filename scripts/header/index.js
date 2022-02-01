import { getNode } from '../utils/display/index.js';

const $menuBtn = getNode(`.menu__button`);
const $menuList = getNode(`.menu__list`);

$menuBtn.addEventListener(`click`, () => { 
  let expanded = $menuBtn.getAttribute(`aria-expanded`) === `true` || `false`;
  $menuBtn.setAttribute(`aria-expanded`, !expanded);
  $menuBtn.classList.toggle(`menu__button--open`);
  $menuList.classList.toggle(`menu__list--open`);
});
