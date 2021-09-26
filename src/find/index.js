const findIndex = require("../findIndex");
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

module.exports = find;
