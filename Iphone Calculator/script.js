const display = document.getElementById("display");
let isResultDisplayed = false;

//for +/- signs
function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
}

//for AC buttton
function clearDisplay() {
  display.value = "";
  isResultDisplayed = false;
}

//% button
function percent() {
  if (!isResultDisplayed && display.value !== "") {
    display.value = parseFloat(display.value) / 100;
  }
}

//0 button

function addZero() {
  const lastChar = display.value.slice(-1);

  // Prevent "00" at the start unless it's "0."
  if (display.value === "0" || (isNaN(lastChar) && lastChar !== ".")) {
    display.value = display.value.slice(0, -1) + "0";
  } else if (isResultDisplayed) {
    display.value = "0";
    isResultDisplayed = false;
  } else {
    display.value += "0";
  }
}

function addToDisplay(input) {
  const lastChar = display.value.slice(-1);

  // Reset display if a result is shown
  if (isResultDisplayed && !isNaN(input)) {
    display.value = input;
    isResultDisplayed = false;
  } else if (isResultDisplayed && isNaN(input)) {
    isResultDisplayed = false;
    display.value += input;
  }
  // Prevent multiple consecutive operators
  else if (
    isNaN(lastChar) &&
    isNaN(input) &&
    lastChar !== "." &&
    input !== "-"
  ) {
    display.value = display.value.slice(0, -1) + input;
  }
  // Append the input to the display
  else {
    display.value += input;
  }
}

function addDecimal() {
  const lastChar = display.value.slice(-1);

  // Prevent adding multiple decimal points
  if (display.value === "" || isResultDisplayed) {
    display.value = "0.";
    isResultDisplayed = false;
  } else if (!display.value.includes(".") || isNaN(lastChar)) {
    display.value += ".";
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/x/g, "*"));
    isResultDisplayed = true;
  } catch (e) {
    display.value = "Error";
    isResultDisplayed = true;
  }
}
