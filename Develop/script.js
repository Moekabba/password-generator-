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
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "?",
];
