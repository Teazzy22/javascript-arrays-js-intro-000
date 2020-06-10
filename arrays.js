var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars.unshift("foo", ...chocolateBars);
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray() {

}
