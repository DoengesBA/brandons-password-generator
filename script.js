// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  var userInput = window.prompt("How many characters would you like to have?")
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Invalid characters! Please use numbers only!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid amount of characters! Please try again!")
    return
  }

  var userSelectsLowercase = window.confirm("Would you like to include lowercase characters?")
  var userSelectsUppercase = window.confirm("Would you like to include uppercase characters?")
  var userSelectsNumbers = window.confirm("Would you like to include numbers?")
  var userSelectsSymbols = window.confirm("Would you like to include symbols?")

  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var symbolsList = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ]

  var selections = []
  if (userSelectsLowercase === true) {
    selections.push(lowercaseList)
  }
  if (userSelectsUppercase === true) {
    selections.push(uppercaseList)
  }
  if (userSelectsNumbers === true) {
    selections.push(numbersList)
  }
  if (userSelectsSymbols === true) {
    selections.push(symbolsList)
  }
  while (!userSelectsLowercase && !userSelectsUppercase && !userSelectsNumbers && !userSelectsSymbols) {
    window.alert("You must select at least one character type!");
    return
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = getRandomItem(selections)
    var randomChar = getRandomItem(randomItem)
    generatedPassword += randomChar
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
