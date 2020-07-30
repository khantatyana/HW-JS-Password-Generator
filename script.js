// Assignment Code
var password = generatePassword();

//from 97 = a to 122 = z
function randomLowercase() {
  const userLowercase = Math.floor((Math.random() * 26) + 97);
  const character = String.fromCharCode(userLowercase);
  return character;
}
//from 65 = A to 90 = Z
function randomUppercase() {
  const userUppercase = Math.floor((Math.random() * 26) + 65);
  const character = String.fromCharCode(userUppercase);
  return character;
}
//from 32 to 47 - special characters
function randomSpecialChar() {
  const userSpecialChar = Math.floor((Math.random() * 16) + 32);
  const character = String.fromCharCode(userSpecialChar);
  return character;
}
//numeric from 0 to 9
function randomNumericChar() {
  const userNumericChar = Math.floor(Math.random() * 10);
  const character = userNumericChar.toString();
  return character;
}

// function generatePassword(lengthValidation, lowercase, uppercase, numeric, special) {
//   // Array of functions to get a type of character.
//   // We will rotate between these functions.
//   const randomCharacters = [];
//   if (lowercase) {
//     randomCharacters.push(randomLowercase);
//   }
//   if (uppercase) {
//     randomCharacters.push(randomUppercase);
//   }
//   if (numeric) {
//     randomCharacters.push(randomNumericChar);
//   }
//   if (special) {
//     randomCharacters.push(randomSpecialChar);
//   }
//   let ind = 0;
//   const passwordChars = [];
//   for (i = 0; i < lengthValidation; i ++) {
//     const typeFunc = randomCharacters[ind]
//     const newChar = typeFunc();
//     ind ++;
//     ind %= randomCharacters.length;
//     passwordChars.push(newChar);
//     console.log(randomCharacters);
//   }
//   const randomPassword = (passwordChars.join(""));
//   return randomPassword;
// }

function generatePassword(lengthValidation, lowercase, uppercase, numeric, special) {
  
  // Array of functions to get a type of character.
  const randomCharacters = [];
  let newPassword = "";
  if (lowercase) {
    randomCharacters.push(randomLowercase);
  }
  if (uppercase) {
    randomCharacters.push(randomUppercase);
  }
  if (numeric) {
    randomCharacters.push(randomNumericChar);
  }
  if (special) {
    randomCharacters.push(randomSpecialChar);
  }
  for (i = 0; i < lengthValidation; i ++) {

    //characters for the string of newPassword will be chosen randomly between the array's index
    newPassword = newPassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)]();
    console.log(newPassword);
  }
  const randomPassword = (randomCharacters.join(""));
  return newPassword;
}

// Add event listener to generate button

const button = document.getElementById("generate");
const textarea = document.getElementById("password");
button.addEventListener("click", function () {
  //prompt for password length criteria
    function writePassword() {
        const lengthOfPassword = parseInt(prompt("Enter the number between 8 and 128"));
        if (lengthOfPassword < 8 || lengthOfPassword > 128) {
          prompt("You enter not valid number. Try again.")
            return writePassword();
        }
        return lengthOfPassword;
    }
    //confirms from user's choice about lowercase, uppercase, numeric, special characters
    const num = writePassword();
    const lowercase = confirm("Do you want to include lower case?");
    const uppercase = confirm("Do you want to include upper case?");
    const numeric = confirm("Do you want to include numeric?");
    const special = confirm("Do you want to include special character?");
    const password = generatePassword(num, lowercase, uppercase, numeric, special);
    textarea.textContent = password;

})