var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  element = 'foo';
  array = [element, ...chocolateBars]
  console.log(array);
}




function destructivelyAddElementToBeginningOfArray(array,element) {
  var array = chocolateBars;
  element = 'foo';
  array.unshift(element)
  return array;
}
