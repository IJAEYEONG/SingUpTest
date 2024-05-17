import name from './names.js';

console.log(name)
function validateName() {
  const nameInput = document.getElementById('username');
  const name = nameInput.value;

  if (name.includes(name)) {
    console.log('이름이 맞습니다.');
  } else {
    console.log('이름이 틀립니다.');
  }
}
