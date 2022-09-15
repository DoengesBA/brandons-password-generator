// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of variables to utilize Uppercase, Lowercase, Numbers and Symbols
var uppercaseCharCodes = arrayFromLowToHigh(65, 90);
var lowercaseCharCodes = arrayFromLowToHigh(97, 122);
var numericCharCodes = arrayFromLowToHigh(48, 57);
var specialCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 126));


// Prompt for the length of password 
var charAmountNumber = prompt("How many characters would you like?")
  if()


// Prompt for lowercase

// Prompt for uppercase


// Prompt for numeric


// Prompt for special characters

function generatePassword() {
  
  
  
  function arrayFromLowToHigh(low, high) {
    const array = []
    for (var i = low; i <= high; i++) {
      array.push(i)
    }
  }

  



  return array;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
