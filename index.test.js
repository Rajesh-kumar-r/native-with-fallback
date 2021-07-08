const {isInteger, findIndex, find} = require('./index');
const normalArray = [1, 2, 3, 4, 5];
const arrayOfObject = [
  {name: 'Rajesh', role: 'developer'},
  {name: 'Chandraprakaash', role: 'developer'},
  {name: 'Rajesh', role: 'developer'},
];

test('check is given value is number', () => {
  expect(isInteger(5)).toBe(true);
  expect(isInteger('5')).toBe(false);
  expect(isInteger(true)).toBe(false);
});
test('find index of a value in a array', () => {
  expect(findIndex(normalArray, (value)=>value===2)).toBe(1);
  expect(findIndex(normalArray, (value)=>value===10)).toBe(-1);
  expect(findIndex(arrayOfObject, (value)=>value.name==='Rajesh')).toBe(0);
});
test('check is given value is exist in array', () => {
  expect(find(normalArray, (value)=>value===2)).toBe(2);
  expect(find(arrayOfObject, (value)=>{
    return value.name==='Rajesh';
  })).toEqual(arrayOfObject[0]);
  expect(find(arrayOfObject, (value)=>value.name==='Arun')).toBe(undefined);
});
