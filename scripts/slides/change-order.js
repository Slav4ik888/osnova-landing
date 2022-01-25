import data from './data.js';

const MAX_IDX = data.length - 1;
const MIN_IDX = 0;

const shiftLeft  = (value) => value === MAX_IDX ? MIN_IDX : value + 1;
const shiftRight = (value) => value === MIN_IDX ? MAX_IDX : value - 1;

export default function changeOrder(direction, orders) {
  if (!direction) return null;
  const left = direction === `left`;

  for (let key in orders) {
    if (Object.prototype.hasOwnProperty.call(orders, key)) {
      orders[key] = left ? shiftRight(orders[key]) : shiftLeft(orders[key])
    }
  }
}
  