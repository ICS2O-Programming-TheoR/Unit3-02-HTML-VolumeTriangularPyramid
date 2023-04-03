// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let lengthA = parseFloat(document.getElementById("a-length").value);
  let lengthB = parseFloat(document.getElementById("b-length").value);
  let height = parseFloat(document.getElementById("height").value);

  //This is the math for the first part of the formula
  let result = lengthA * lengthB * height
  let resultRounded = result.toFixed(2)

  //This is the math for the second part of the formula
  let finalResult = resultRounded / 6
  let finalResultRounded = finalResult.toFixed(2)

  //The Result
  document.getElementById('volume-info').innerHTML = "The total volume of the Triangular Pyramid is " + (finalResultRounded) + "cm<sup>3</sup>."
}