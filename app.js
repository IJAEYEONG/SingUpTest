import name from "./names.js"
import * as getElementById from "./getElementID.js"

function validateForm() {
  let checkbox = document.querySelector('.parent');
  let checkbox2 = checkbox.querySelector('.checkbox');
  let emilbox = document.querySelector('.email_box');
  let emilbox_checkbox=emilbox.querySelector('.checkbox')
  let emailInput=getElementById.default("email")
  let passwordInput = document.getElementById('newPassword');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  let nameInput = document.getElementById('username');
  let email = emailInput.value;
  let newPassword = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;
  if(emailInput.value.indexOf("@") == -1 || emailInput.value.indexOf(".") == -1 || emailInput.value.length <=5){
    alert("잘못된 이메일 형식입니다.")
    emailInput.focus();
    emilbox_checkbox.style.backgroundColor='red';
    return false;
  } 
   else {
    emilbox_checkbox.style.backgroundColor='green';
  }
  if(newPassword !== confirmPassword){
    alert("비밀번호와 동일하지 않습니다.")
    newPassword.focus();
    return false;
}else if(newPassword === confirmPassword){
  alert("동일합니다.")
}
  // Assume `name` is an array of valid names from the imported `./names.js` file
  if (name.includes(nameInput.value)) {
    checkbox2.style.backgroundColor='green';
  }else if(nameInput.value===''){
    checkbox2.style.backgroundColor='blue';
  }
   else {
    checkbox2.style.backgroundColor='red'
  }
}

window.validateForm = validateForm; // Make the function globally accessible

