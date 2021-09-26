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
  module.exports = findIndex;