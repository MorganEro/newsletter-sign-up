// Path: index.js
const form = document.querySelector('form'),
  signUpContainer = document.querySelector('.sign-up-container'),
  email = document.querySelector('input[type="email"]'),
  error = document.querySelector('.form-error'),
  errorMessage = 'Valid email required.',
  successContainer = document.querySelector('.success-container'),
  dismissButton = document.querySelector('.btn-dismiss'),
  strongElement = document.querySelector('strong');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '') {
    email.classList.add('invalid');
    error.innerHTML = errorMessage;
  } else {
    signUpContainer.style.display = 'none';
    successContainer.style.display = 'grid';
    error.innerHTML = '';
    strongElement.innerHTML = email.value;
    email.classList.remove('invalid');
  }
});
email.addEventListener('invalid', e => {
  e.preventDefault();
  error.innerHTML = errorMessage;
  email.classList.add('invalid');
});

dismissButton.addEventListener('click', e => {
  successContainer.style.display = 'none';
  signUpContainer.style.display = 'grid';
  email.value = '';
  email.classList.remove('invalid');
  error.innerHTML = '';
});
