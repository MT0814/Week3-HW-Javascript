// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var special = '!@#$%^&*_=+-/.?<>)';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
function generatePassword(){
  var passwordlength = window.prompt ("What is the length for the password? (must between 8 to 128)")
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert ('The length must be between 8 and 128.')
  return;
  }
  if (isNaN(parseInt(passwordlength)))
  {
  window.alert('Must input numbers.');
    return false;
  }
  
  var character = '';
  var passwordLowercase = window.confirm ("Do you want lowercase in the password?");
  var passwordUppercase = window.confirm ("Do you want uppercase in the password?");
  var passwordNumeric = window.confirm ("Do you want numeric in the password?");
  var passwordSpecial = window.confirm ("Do you want special characters in the password?");
  
  if (passwordLowercase === true) {
    character = character + lowercase 
  }
  if (passwordUppercase === true) {
    character = character + uppercase 
  }
  if (passwordNumeric === true) {
    character = character + numeric
  }
  if (passwordSpecial === true) {
    character = character + special
  }
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) { 
    window.alert ("Must pick at least one character.")
    return;
  }

  var password = '';

  for (var i = 0; i < passwordlength; i++) {
    password += character.charAt (Math.floor(Math.random() * character.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







