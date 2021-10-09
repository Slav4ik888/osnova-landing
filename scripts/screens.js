// const elipse8El = document.querySelector(`.elipse8`);
// const elipse7El = document.querySelector(`.elipse7`);
// const elipse6El = document.querySelector(`.elipse6`);
// const elipse5El = document.querySelector(`.elipse5`);


// // Возвращает сколько нужно отступить влево
// export const getIndentLeft = (clientSize) => {
//   if (clientSize >= 1920) return 0;

//   return 1920 - clientSize;
// };


// export const setStylesByScreenSize = (clientSize) => {

//   const difference = getIndentLeft(clientSize);
//   console.log('difference: ', difference);

//   elipse8El.style.left = `-${889 + difference}px`;
//   elipse7El.style.left = `-${739 + difference}px`;
//   elipse6El.style.left = `-${589 + difference}px`;
//   elipse5El.style.left = `-${439 + difference}px`;
// };


// Возвращает ширину экрана
export const getScreenSize = () => {
  let clientWidth = document.documentElement.clientWidth;
  console.log('clientWidth: ', clientWidth);

  return clientWidth;
};


// Listener screen change
export const screenListener = (setScreenFormats) => {
  window.addEventListener("resize", resizeThrottler, false);
  console.log(`START LISTENER RESIZE`);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
      }, 200);
    }
  }

  // Получаем текущий размер экрана и сохраняем в store
  function actualResizeHandler() {
    const screenSize = getScreenSize();
    setScreenFormats(screenSize);
  }

  // Один раз запускаем в самом начале
  actualResizeHandler();
};

// Start screen listener
// screenListener(setStylesByScreenSize);
