// Youtube btn
const $yBtn    = document.querySelector(`.sec3-you-tube-cnt`);
const $yCircle = document.querySelector(`.sec3-you-tube-center`);

$yBtn.addEventListener(`mouseover`, () => {
  $yCircle.classList.add(`sec3-ytb-hover`);
})
$yBtn.addEventListener(`mouseout`, () => {
  $yCircle.classList.remove(`sec3-ytb-hover`);
});