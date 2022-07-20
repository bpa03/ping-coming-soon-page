const $ = (selector) => {
  return document.querySelector(selector);
};

const emailInput = $('#email');
const statusMessage = $('#status-message');
const form = $('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const value = emailInput.value;
  const invalidEmail = value === '' || !regex.test(value);

  if (invalidEmail) {
    if (emailInput.classList.contains('form__input-status_error')) {
      return;
    }
    emailInput.classList.add('form__input-status_error');
    statusMessage.style.opacity = 1;
    setTimeout(() => {
      emailInput.classList.remove('form__input-status_error');
      statusMessage.style.opacity = 0;
    }, 3000);
    return;
  }
});
