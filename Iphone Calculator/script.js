const display = document.getElementById("display");

//sign for negative and positive

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
}

function addToDisplay(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  document.getElementById("display").value = " ";
}

function percent() {
  display.value = parseFloat(display.value) / 100;
}
