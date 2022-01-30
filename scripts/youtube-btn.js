// Youtube btn
const $yBtn    = document.querySelector(`.s3-you-tube-cnt`);
const $yCircle = document.querySelector(`.s3-you-tube-center`);

$yBtn.addEventListener(`mouseover`, () => {
  $yCircle.classList.add(`s3-ytb-hover`);
})
$yBtn.addEventListener(`mouseout`, () => {
  $yCircle.classList.remove(`s3-ytb-hover`);
});
