let text = '';
let number = '';
let email = '';
let inputText = document.getElementById('text');
let inputNumber = document.getElementById('number');
let inputEmail = document.getElementById('email');
let submitButton = document.getElementById('submit');
let divText = document.getElementById('text-value');
let divNumber = document.getElementById('number-value');
let divEmail = document.getElementById('email-value');

inputText.addEventListener('keydown', function() {
  text = this.value;
  if (this.value) {
    divText.innerText = 'Entered text: ' + this.value
  } else {
    divText.innerText = ''
  }
});

inputNumber.addEventListener('keydown', function() {
  number = this.value;
  if (this.value) {
    divNumber.innerText = 'Entered number: ' + this.value
  } else {
    divNumber.innerText = ''
  }
});

inputEmail.addEventListener('keydown', function() {
  email = this.value;
  if (this.value) {
    divEmail.innerText = 'Entered email: ' + this.value
  } else {
    divEmail.innerText = ''
  }
});

submitButton.addEventListener('click', function() {
  alert('text: ' + text + ', number: ' + number + ', email: ' + email )
})