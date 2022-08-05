// Assignment code here
var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var newPasswordChars = "";
var newPasswordFinal = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // don't touch

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // generatePassword function needs to be created
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // don't touch

function generatePassword() {
  // prompt user for length
  var passwordLength = window.prompt(
    "Enter the number of characters you want in your password?\n\nMore characters means more security!"
  );

  //If they entered a number less than 8
  //  ("Your password must be at least 8 characters\n\nWant to try that again?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    // prompt confirm char choices(lowercase, uppercase, numeric, and/or special characters)

    // Confirm and store preference for lowercase chars
    var isLowerCase = window.confirm(
      "Do you want lowercase characters in your password?"
    );

    // Confirm and store preference for uppercase char
    var isUpperCase = window.confirm(
      "Do you want uppercase characters in your password?"
    );

    // Confirm and store preference for numeric char
    var isNumeric = window.confirm("Do you want numbers in your password?");

    // Confirm and store preference for special char
    var isSpecial = window.confirm(
      "Do you want special characters in your password?"
    );

    // generate password
    // First add perameters then randomly pull the right type(s) of characters from the arrays and make sure password.length === passwordLength

    if (isLowerCase === true) {
      newPasswordChars = newPasswordChars.concat(alphaLow);
    }
    if (isUpperCase === true) {
      newPasswordChars = newPasswordChars.concat(alphaUp);
    }
    if (isNumeric === true) {
      newPasswordChars = newPasswordChars.concat(numbers);
    }
    if (isSpecial === true) {
      newPasswordChars = newPasswordChars.concat(symbols);
    }

    // If user doesn't select at least one password criteria, run an alert and run generatePassword again
    if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
      alert("You've got to select at least one password criteria.");
      generatePassword();
    }

    // Generate password with input criteria
    for (var i = 0; i < passwordLength; i++) {
      // Generate random number and assign it to variable
      var randomIndex = Math.floor(newPasswordChars.length * Math.random());
      // Pull random value from array with index
      var randomChar = newPasswordChars[randomIndex];
      // As the loop runs, it builds the new password to meet criteria
      newPasswordFinal = newPasswordFinal.concat(randomChar);
    }

    alert("Your password is: " + newPasswordFinal);

    // Alert user if above doesn't run, start generatePassword
  } else {
    alert("Something went wrong. Be sure to enter a number");
    generatePassword();
  }
}
generatePassword();
