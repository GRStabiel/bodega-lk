
const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
      if (!emailInput.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
      }
});
