// Assignment Code
var generateBtn = document.querySelector("#generate")
var opt1 ="abcdefghijklmnopqrstuvwxyz";
var opt2 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var opt3 ="01223456789";
var opt4 ="!@#$%^&*()";

// Need to make this var contingent upon the inputs to to promts //

var poolSet = ????????????????????????????????????????????

// Write password to the #password input
function writePassword() {

  // First, Prompt questions // 

  var passLength = prompt("Pick a a length of characters (min: 8 max: 128");
  var lowCase = confirm("include lowercase numbers?");
  var upCase = confirm("include uppercase? numbers?");
  var numCase = confirm ("include numbers?");
  var speCase = confirm ("include special characters?");


  //Second, password output //
  var password = generatePassword() {

    // length of password should be equl to pass lenth promt input //
    length = passLength, 
    // the pool of characters is set to a var above//
    charset = poolEl,

    // the characters of will need to be randomized from the poolEl Variable
    
    for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));

    // but before we select random characters, we must first declare what opt components will be included in poolset, based on prompt
    // if lowCase = true, then add the lowercase alaphbet to the pool of available characters. If not, then exclude them from the pool of available characters//
    // if upCase = true, then all the upper case alaphabet to the pool of available charcters. In not, exclude them"
    // if num case = true. then add numers to available characters, in not exclude them"
    // if speCase = true, then add special characters to avialable pool 

      ???????????????????????????????????????????????????

    // punlish password result to the html //
    
    ?????????????????????????????????????????????????????
}



  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
