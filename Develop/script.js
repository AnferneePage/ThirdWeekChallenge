// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword(){
  
      
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var validlength = true
  while (validlength) {
    var passwordLength=prompt("How many characters do you want?");
    if (passwordLength >= 8 && passwordLength <= 128){
      validlength= false
      break
    } else {
      alert('Password must be at least between 8-128 characters. Please enter a new selection.')
    }
  }
     var possibleCharacters=[]
      var numberCharater= ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var numbers=confirm('Would you like numbers in your password?');
      if (numbers) {
        possibleCharacters= possibleCharacters.concat(numberCharater)
      }
      //here (replicate lines 27-31//)
      var finalPassword= ""

      for(i=0;i<passwordLength;i++) {
      var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
      var randomElement = possibleCharacters[randomNumber];
      finalPassword += randomElement
      }
      return finalPassword
}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


