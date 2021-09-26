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

module.exports = isInteger;