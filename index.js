/**
 * Check is given value is integer.
 * @param {any} value The first number.
 * @return {boolean} The sum of the two numbers.
 */
function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }
  return (
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  );
}
/**
 * Gets index of a matchig value in array.
 * @param {Array} list List for the iteration.
 * @param {function} predicate function for checking.
 * @return {int} Index of the value.
 */
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  // Using a for loop so that we can exit early
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  // Array.prototype.find returns -1 when nothing is found
  return -1;
}
/**
 * Find the matching value in the given array.
 * @param {Array} list List for the iteration.
 * @param {function} predicate function for checking.
 * @return {int} Return the value match the function.
 */
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  const index = findIndex(list, predicate);
  if (index !== -1) {
    return list[index];
  }
  // Array.prototype.find returns undefined when nothing is found
  return undefined;
}

module.exports = {isInteger, findIndex, find};
