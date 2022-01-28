
/**
 * Add classes into elem
 * @param {Node} $elem 
 * @param {Array<string>} classes 
 * @returns 
 */
export const addClasses = ($elem, classes) => classes?.forEach(className => $elem.classList.add(className));
