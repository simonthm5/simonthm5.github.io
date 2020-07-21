// Assignment Code
var generateBtn = document.querySelector("#generate")
var opt1 = "abcdefghijklmnopqrstuvwxyz";
var opt2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var opt3 = "01223456789";
var opt4 = "!@#$%^&*()";
var password = ""

// Need to make this var contingent upon the inputs to to promts //



// Write password to the #password input
function writePassword() {

  // First, Prompt questions // 

  var passLength = prompt("Pick a a length of characters (min: 8 max: 128");
  var lowCase = confirm("include lowercase?");
  var upCase = confirm("include uppercase?");
  var numCase = confirm("include numbers?");
  var speCase = confirm("include special characters?");

  // if lowCase = true, then add the lowercase alaphbet to the pool of available characters. If not, then exclude them from the pool of available characters//
  // if upCase = true, then all the upper case alaphabet to the pool of available charcters. In not, exclude them"
  // if num case = true. then add numers to available characters, in not exclude them"
  // if speCase = true, then add special characters to avialable pool 


  var poolEl = ""

  if (lowCase) {
    poolEl += opt1
  }

  if (upCase) {
    poolEl += opt2
  }

  if (numCase) {
    poolEl += opt3
  }

  if (speCase) {
    poolEl += opt4
  }

  // console.log(poolEl)

  //Second, password output //
  function generatePassword() {

   


    // length of password should be equl to pass lenth promt input //

    console.log(length)


    for (let index = 0; index < passLength; index++) {
      var random = Math.floor(Math.random() * poolEl.length)
      console.log(index)

      password += poolEl[random]
    }
    console.log(password)

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // but before we select random characters, we must first declare what opt components will be included in poolset, based on prompt

    // ???????????????????????????????????????????????????

    // publish password result to the html //

    // ?????????????????????????????????????????????????????
  }

  generatePassword()

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
