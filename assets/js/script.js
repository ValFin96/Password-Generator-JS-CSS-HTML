// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength ="";
var upperCase;
var lowerCase;
var numbers;
var symbols;
var choiceArr =[];
var yourNewPassword = "";

function generatePassword () {

  function getPasswordLength (){
    var passwordLength=window.prompt ("How long would you like your password to be?");
    console.log(passwordLength);
    console.log(typeof passwordLength);
    //a. password length between 8 and 128
    if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
      window.alert ("The password should be at least 8 characters and no longer than 128 characters");
      getPasswordLength ();
    } else if (isNaN(passwordLength)) {
      window.alert("This is not a number. Try again");
      getPasswordLength ();
    };
    return passwordLength.trim();
  }
  //1. Prompt the user for the password criteria
  var passwordLength = parseInt(getPasswordLength());
  console.log(passwordLength);
      // window.alert ("Your password will be " + passwordLength + " characters");
      
      upperCase = window.confirm ("Do you want to include uppercase letters?");
      lowerCase = window.confirm ("Do you want to include lowercase letters?");
      numbers = window.confirm ("Do you want to add numbers to your password?");
      symbols = window.confirm ("Do you want to add symbols to your password?");
    
    //b.Lowercase, Uppercase, numbers, special characters
      if (!upperCase && !lowerCase && !numbers && !symbols) {
        choiceArr = window.alert("You must choose one!")
        return;
      }
    //2.Validate the input
      if (upperCase){
        choiceArr = choiceArr.concat(upperCasedCharacters);
      }

      if (lowerCase){
        choiceArr = choiceArr.concat(lowerCasedCharacters);
      }

      if (numbers){
        choiceArr = choiceArr.concat(numericCharacters);
      }

      if (symbols){
        choiceArr = choiceArr.concat(specialCharacters);
      }

      console.log(choiceArr); //Check if the values added to the choice array

    //3. Generate password based on criteria.
    for (var i = 0; i < passwordLength; i++){
      yourNewPassword = yourNewPassword + choiceArr[Math.floor(Math.random() * choiceArr.length)];
    }
    //4. Display the generated password on the page
    return yourNewPassword;
    };
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

