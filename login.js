

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (event) {
    let isValid = true;

    if (!emailInput.validity.valid) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!passwordInput.value.trim()) {
      passwordInput.classList.add('is-invalid');
      isValid = false;
    } else {
      passwordInput.classList.remove('is-invalid');
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
});
