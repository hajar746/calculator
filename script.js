"use strict";
// calculator app made by Hajar A
let num1;
let num2;
let operator;
let result;

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
  if (operator === "∧") return power(getNum1(), getNum2());
}

// FUNCTION TO RUN IF THE OPERATOR IS %
const percentage = function () {
  const a = getNum1();
  displayScreen.textContent = percent(a);
  num1 = percent(a);
  display = "";
  display += num1;
};

// FUNCTION TO CALCULATE NUM1 AND RESET VALUE OF DISPLAY TO NUM1
const getResult = () => {
  result = Math.round(operate(getOperator(), getNum1(), getNum2()) * 100) / 100;
  num1 = result;
  display = "";
  display += num1;
};

// GET VALUE OF DISPLAY SCREEN
let display = ""; // every thing that user clicks on
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
  // evaluating multiple operations
  if (e.target.classList.contains("operator") && /[+∧×÷–]/.test(display))
    getResult();
  // evaluating first operation
  if (e.target.classList.contains("operator") && !/[+∧×÷–]/.test(display)) {
    displayScreen.textContent = target;
    display += target;
  }
  if (target == "%") percentage();
  if (target == "=") return;
});

// GET FIRST NUMBER (from display string)
const getNum1 = function () {
  num1 = display.replace(/[^0-9.].*/, ""); //returns all numbers before operator starts
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

// RUN OPERATION AND DISPLAY IT
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  getResult();
  // dont divide by 0
  if (result === NaN || result === Infinity || result === -Infinity) {
    displayScreen.textContent = "Dont do that";
    return;
  }
  displayScreen.textContent = result;
});

// CLEAR DISPLAY SCREEN
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  displayScreen.replaceChildren();
  display = "";
});
