// These functions will take in the user's input in the text boxes and convert them into floats.
// We then calculate the answer and put it in the answer element.

// This function below adds 2 numbers, and these numbers are taken from the inputs which has the class "num1" and "num2"
// The answer variable here not only adds the numbers, but also checks for invalid responses, incase the user accidentally put letters. We did this by using isNaN.
function Add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const answer = isNaN(num1 + num2) ? 'Invalid' : (num1 + num2);
  document.getElementById("answer").value = answer;
}

// This function below subtracts 2 numbers, and these numbers are taken from the inputs which has the class "num1" and "num2"
// The answer variable here not only subtracts the numbers, but also checks for invalid responses, incase the user accidentally put letters. We did this by using isNaN.
      
function Subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const answer = isNaN(num1 - num2) ? 'Invalid' : (num1 - num2);
  document.getElementById("answer").value = answer;
}

// This function below multiplies 2 numbers, and these numbers are taken from the inputs which has the class "num1" and "num2"
// The answer variable here not only multiplies the numbers, but also checks for invalid responses, incase the user accidentally put letters. We did this by using isNaN.
      
function Multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const answer = isNaN(num1 * num2) ? 'Invalid' : (num1 * num2);
  document.getElementById("answer").value = answer;
}


// This function below multiplies 2 numbers, and these numbers are taken from the inputs which has the class "num1" and "num2"
// The answer variable here not only multiplies the numbers, but also checks for invalid responses, incase the user accidentally put letters. We did this by using isNaN.
function Divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const answer = isNaN(num1 / num2) ? 'Invalid' : (num1 / num2);
  document.getElementById("answer").value = answer;
}