const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const togglePasswordBtn = document.getElementById("toggle-password");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function validateEmail(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Email is required.";
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return "Please enter a valid email address.";
  }

  return "";
}

function validatePassword(value) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }

  if (!/[A-Z]/.test(value)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/[0-9]/.test(value)) {
    return "Password must contain at least one number.";
  }

  return "";
}

function showFieldError(input, errorElement, message) {
  input.classList.add("invalid");
  errorElement.textContent = message;
}

function clearFieldError(input, errorElement) {
  input.classList.remove("invalid");
  errorElement.textContent = "";
}

function validateField(input, validator, errorElement) {
  const message = validator(input.value);

  if (message) {
    showFieldError(input, errorElement, message);
    return false;
  }

  clearFieldError(input, errorElement);
  return true;
}

emailInput.addEventListener("blur", () => {
  validateField(emailInput, validateEmail, emailError);
});

passwordInput.addEventListener("blur", () => {
  validateField(passwordInput, validatePassword, passwordError);
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("invalid")) {
    validateField(emailInput, validateEmail, emailError);
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("invalid")) {
    validateField(passwordInput, validatePassword, passwordError);
  }
});

togglePasswordBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = true;

  const isEmailValid = validateField(emailInput, validateEmail, emailError);
  const isPasswordValid = validateField(passwordInput, validatePassword, passwordError);

  if (!isEmailValid || !isPasswordValid) {
    const firstInvalid = !isEmailValid ? emailInput : passwordInput;
    firstInvalid.focus();
    return;
  }

  successMessage.textContent = "Login successful! Welcome back.";
  successMessage.hidden = false;
  form.reset();
  clearFieldError(emailInput, emailError);
  clearFieldError(passwordInput, passwordError);
});
