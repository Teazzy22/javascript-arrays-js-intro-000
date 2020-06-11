var chocolateBars;
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  var array = chocolateBars;
  var element = 'foo';
  chocolateBars = [element, ...array]
  return chocolateBars
}
