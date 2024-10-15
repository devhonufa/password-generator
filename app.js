const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// declared variable
const resultBtn = document.getElementById("result");
const totalChar = document.getElementById("length");
const upperBtn = document.getElementById("uppercase");
const lowerBtn = document.getElementById("lowercase");
const numbersBtn = document.getElementById("numbers");
const symbolsBtn = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

// generate event listen clipboard
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultBtn.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	// alert('Password copied to clipboard');
});

const getRandomDataSet = (dataSet) =>{
  return dataSet[Math.floor(Math.random() * dataSet.length)]
}
 // generatePassword 

 const generatePassword = (password = "") => {
    if(upperBtn.checked){
      password += getRandomDataSet(upperSet)
    }
    if(lowerBtn.checked){
      password += getRandomDataSet(lowerSet)
    }
    if(numbersBtn.checked){
      password += getRandomDataSet(numberSet)
    }
    if(symbolsBtn.checked){
      password += getRandomDataSet(symbolSet)
    }
    if(password.length < totalChar.value){
      return generatePassword(password)
    }
    resultBtn.innerText = truncateString(password, totalChar.value);
 }




 generatePassword();


 generateBtn.addEventListener(
  'click',
   function () {
     generatePassword();
   }
 )

 function truncateString(str, num) {
  if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr;
  } else {
      return str;
  }
}