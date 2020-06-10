var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars.unshift("foo", 1,  ...chocolateBars)
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray() {

}
