// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Function to prompt user for password options
function getPasswordOptions() { 
let length = parseInt ()
  prompt (" how many characters would you like your password to contain");

}

if (isNaN(length)===true) {
  alert (`password length must be provided as number`);
  return null;
}

if (length < 10 ) {
  alert (`password length must be at least 10 characters`);
  return null;

}
if (length > 64){ 
alert (`password must be less that 64`);
return null;

}

var hasSpecialCharacters = confirm("click OK to confirm including special characters");

var hasNumericCharacters = confirm("click OK to confirm including numeric characters");

var haslowerCasedCharacters = confirm("click OK to confirm including lowercase characters");

var hasUpperCasedCharacters = confirm("click OK to confirm including uppercase characters");

if(haslowerCasedCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasSpecialCharacters === false &&
  hasNumericCharacters === false ) {
  alert (`must select at least one chararacter type`);
  return null;
  

}
var passwordOptions= {
 length:length,
 hasSpecialCharacters: hasSpecialCharacters,
 hasNumericCharacters: hasNumericCharacters,
 hasUpperCasedCharacters: hasUpperCasedCharacters,
 haslowerCasedCharacters: haslowerCasedCharacters 
}

console.log(passwordOptions);
 
return passwordOptions;


// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor (Math.random() * arr. length);
var randomElement = arr[randomIndex];

return randomElement;
}

// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions();
console.log(options);
let result =[]

let possibleCharacters= []

let guaranteedCharacters = []

if( options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters))
}

if( options.hasUpperCasedCharacters) {
  possibleCharacter = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters))
}
if( options.haslowerCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters))
}
if( options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters))
}
console.log(possibleCharacters);

for (let index= 0; index < options.length; index++){
  var generated =getRandom(possibleCharacters);
  console.log(generated);
  result.push(generated);
}

for(let index =0; index < guaranteedCharacters.length; index++){
  result[index] = guaranteedCharacters[index];

}
console.log(result);

return result.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set the value of the password textarea element to the generated password
passwordTextArea.value = password;
