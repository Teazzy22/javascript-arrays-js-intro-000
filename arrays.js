var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, foo) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars = ['foo', ...chocolateBars];
  console.log(chocolateBars)
  return chocolateBars;
}
