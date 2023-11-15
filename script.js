"use strict";
// calculator app made by Hajar A
let num1;
let num2;
let operator;

// MATH OPERATION FUNCTIONS
const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const percent = (a) => a / 100;

// FUNCTION THAT RUNS OPERATIONS
function operate(operator, a, b) {
  if (!(operator || a || b)) return;
  if (operator === "+") return add(a, b);
  if (operator === "–") return subtract(a, b);
  if (operator === "×") return multiply(a, b);
  if (operator === "÷") return divide(a, b);
  if (operator === "xⁿ") return power(a, b);
  if (operator === "%") return percent(a);
}

// GET VALUE OF DISPLAY SCREEN
let display = "";
let displayScreen = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", function (e) {
  // making sure the target is only for button elements
  if (
    e.target.classList.contains("div") ||
    e.target.classList.contains("clear")
  )
    return;
  const target = e.target.textContent;
  //checking for number values and decimal
  if (!isNaN(target) || target == ".") {
    if (isNaN(displayScreen.textContent) && displayScreen.textContent != ".") {
      display += ",";
      displayScreen.textContent = " "; // clearing the screen only if the previous value was an operator
    }
    displayScreen.textContent += target;
    display += target;
  }
  //checking for operator values
  if (e.target.classList.contains("operator")) {
    displayScreen.textContent = target;
    display += target;
  }
  if (e.target.classList.contains("key")) display += target;
  console.log(display, "display");
});

// GET FIRST NUMBER (from display)
const getNum1 = function () {
  num1 = display.replace(/[^0-9.].*/, "");
  return num1;
};

// GET SECOND NUMBER (from display)
const getNum2 = function () {
  const num = display.slice(display.indexOf(",") + 1);
  num2 = num.slice(0);
  return num2;
};

// GET OPERATOR (from display)
const getOperator = function () {
  operator = display.slice(display.indexOf(",") - 1, display.indexOf(","));
  return operator;
};

// RUN OPERATION
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  let res = operate(getOperator(), getNum1(), getNum2());
  displayScreen.textContent = res;
});

// CLEAR DISPLAYS SCREEN
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  displayScreen.replaceChildren();
  display = "";
});
