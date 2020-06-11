var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  array = [element, ...chocolateBars]
  return array;
}




function destructivelyAddElementToBeginningOfArray(array,element) {
  var array = chocolateBars;
  element;
  element = 'foo';
  array.unshift(element)
  return element;
  return array;
}
