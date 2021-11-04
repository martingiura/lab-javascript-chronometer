const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
}

function printMinutes() {

  const minDecjs = this.computeTwoDigitNumber(this.getMinutes());
  const minUnijs = this.computeTwoDigitNumber(this.getMinutes());

  minDecElement.innerHTML = minDecjs
  minUniElement.innerHTML = minUnijs

// h2Tag.innerHTML = 'Elephant';
// Let’s add an element into a parent element:

// Copy
// // index.js
// // ...
// let parent = document.getElementsByTagName('body')[0];
// parent.appendChild(h2Tag);
}

function printSeconds() {

  const secDecjs = this.computeTwoDigitNumber(this.getSeconds());
  const secUnijs = this.computeTwoDigitNumber(this.getSeconds());

  secDecElement.innerHTML = secDecjs
  secUniElement.innerHTML = secUnijs
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.setAttribute("class","btn stop")
  
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.setAttribute("class","btn split")
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.setAttribute("class","btn start")
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET"
  btnRightElement.setAttribute("class","btn reset")
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    setStopBtn()
  } else if (btnLeftElement.innerHTML === "STOP") {
    setStartBtn()
  }
});
//

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "SPLIT") {
    setResetBtn()
  } else if (btnRightElement.innerHTML === "RESET") {
    setSplitBtn()
}});
