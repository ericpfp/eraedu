/*
    Copyright (C) 2022 ericpfp & ARYANRAJESH
    
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

// These functions will take in the user's input in the text boxes and convert them into floats. We then calculate the answer and put it in the answer element.
function Add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var answer = isNaN(num1 + num2) ? 'Invalid' : (num1 + num2);
    document.getElementById("answer").value = answer;
}
        
function Subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var answer = isNaN(num1 - num2) ? 'Invalid' : (num1 - num2);
    document.getElementById("answer").value = answer;
}
        
function Multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var answer = isNaN(num1 * num2) ? 'Invalid' : (num1 * num2);
    document.getElementById("answer").value = answer;
}
        
function Divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var answer = isNaN(num1 / num2) ? 'Invalid' : (num1 / num2);
    document.getElementById("answer").value = answer;
}