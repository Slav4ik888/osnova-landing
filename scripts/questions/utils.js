
export const getId       = (idx) => idx + 1;
export const getAnswerId = (id) => `answer-${id}`;
export const getCloseId  = (id) => `close-${id}`;

/**
 * Возвращает есть ли класс среди классов
 * @param {Node} $elem 
 * @param {string} className 
 * @returns 
 */
export const isClass = ($elem, className) => {
  if (!$elem || !className) return false;

  return $elem.classList.value
    .split(` `)
    .includes(className);
};


export const calcStep = (height) => {
  const
    MIN_STEP = 10,
    STEP     = 0.03,
    step     = Math.floor(height * STEP);
  
  return step > MIN_STEP ? step : MIN_STEP
};
