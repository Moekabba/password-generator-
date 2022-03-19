// Assignment Code
// DOM Elements  goes here
var generateBtn = document.querySelector("#generate");
// Declear password length variables here
var passwordLengthMin = 8;
var passwordLengthMax = 128;

// I need an arrays of chsrscters to pick password from
var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// using the slpit method to turn the string inot an array
var capitalLetters = capitals.split("");
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerLetters = letters.split("");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialcharacters = "~!@#$%^&*()_+|?><";
var specialChara = specialcharacters.split("");

// Write password to the #password input
function writePassword() {
  // Dom
  var passwordText = document.querySelector("#password");

  // series of prompts for password criteria
  var promptLength = prompt("Choose password length (between 8-128)");
  if (passwordLengthMax < promptLength || passwordLengthMin > promptLength) {
    promptLength = parseInt(
      prompt("password lenght must be between 8 and 128 characters")
    );
  }
  var promptcapital = confirm("Would you like to add some capital letters?");
  var promptLetters = confirm("Would you like to add some lower case letters?");
  var promptNumber = confirm("Woulalertd you like to add number?");
  var prompSpecialCharacters = confirm(
    "Would you like to add special character?"
  );

  var avalibleCharacters = [];

  if (promptLetters === true) {
    avalibleCharacters = avalibleCharacters.concat(lowerLetters);
  }
  if (promptNumber === true) {
    avalibleCharacters = avalibleCharacters.concat(numbers);
  }

  if (prompSpecialCharacters === true) {
    avalibleCharacters = avalibleCharacters.concat(specialChara);
  }
  if (promptcapital === true) {
    avalibleCharacters = avalibleCharacters.concat(capitalLetters);
  }

  var finalPassword = "";
  // Run loop x amount of times. Where x is the length of the password requested
  for (var i = 0; i < parseInt(promptLength); i++) {
    // Each time through the loop, pick a random characters from avalibleCharacters
    // Each time through the loop, take the random character selected and add it to finalPassword
    var character =
      avalibleCharacters[Math.floor(Math.random() * avalibleCharacters.length)];
    finalPassword = finalPassword + character;
    console.log(finalPassword);
  }
  passwordText.textContent = finalPassword;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
