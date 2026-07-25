// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form validation
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

const validators = {
  name: (value) => value.trim().length > 0 || 'Please enter your name.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Enter a valid email address.',
  'project-type': (value) => value.trim().length > 0 || 'Choose a project type.',
  message: (value) => value.trim().length >= 10 || 'Tell us a bit more (10+ characters).',
};

function setFieldError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorEl = document.getElementById(`${fieldName}-error`);
  const row = field.closest('.form-row');

  if (message) {
    row.classList.add('has-error');
    errorEl.textContent = message;
    field.setAttribute('aria-invalid', 'true');
  } else {
    row.classList.remove('has-error');
    errorEl.textContent = '';
    field.removeAttribute('aria-invalid');
  }
}

function validateField(fieldName) {
  const field = document.getElementById(fieldName);
  const result = validators[fieldName](field.value);
  setFieldError(fieldName, result === true ? '' : result);
  return result === true;
}

Object.keys(validators).forEach((fieldName) => {
  const field = document.getElementById(fieldName);
  field.addEventListener('blur', () => validateField(fieldName));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const results = Object.keys(validators).map(validateField);
  const allValid = results.every(Boolean);

  if (allValid) {
    successMessage.hidden = false;
    form.reset();
    setTimeout(() => {
      successMessage.hidden = true;
    }, 6000);
  } else {
    successMessage.hidden = true;
    const firstInvalid = form.querySelector('.has-error input, .has-error select, .has-error textarea');
    if (firstInvalid) firstInvalid.focus();
  }
});
