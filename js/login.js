import { validateEmail, validatePassword, isFormValid } from "./login-validation.js";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const togglePasswordBtn = document.getElementById("toggle-password");
const submitBtn = form.querySelector(".submit-btn");

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

function updateSubmitButton() {
  submitBtn.disabled = !isFormValid(emailInput.value, passwordInput.value);
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
  updateSubmitButton();
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("invalid")) {
    validateField(passwordInput, validatePassword, passwordError);
  }
  updateSubmitButton();
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
  updateSubmitButton();

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
  updateSubmitButton();
});

updateSubmitButton();
