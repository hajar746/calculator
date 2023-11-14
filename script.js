"use strict";
// calculator app made by Hajar A
let num1;
let num2;
let operator;

// MATH OPERATION FUNCTIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const percent = (a) => a / 100;

// FUNCTION THAT RUNS OPERATIONS
function operate(operator, a, b) {
  if (operator === "+") add(a, b);
  if (operator === "–") subtract(a, b);
  if (operator === "×") multiply(a, b);
  if (operator === "÷") divide(a, b);
  if (operator === "xⁿ") power(a, b);
  if (operator === "%") percent(a);
  else {
    console.log("operator not found");
  }
}

// GET VALUE OF DISPLAY SCREEN
let display = "";
let displayScreen = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", function (e) {
  // making sure the target is only for button elements
  if (e.target.classList.contains("div")) return;
  const target = e.target.textContent;
  //checking for number values and decimal
  if (!isNaN(target) || target == ".") {
    if (isNaN(displayScreen.textContent) && displayScreen.textContent != ".")
      displayScreen.textContent = " ";
    displayScreen.textContent += target;
    display += target;
  }
  //checking for operator values
  if (e.target.classList.contains("operator")) {
    displayScreen.textContent = target;
    display += target;
  }
  if (e.target.classList.contains("key")) display += target;
  console.log(display);
});
