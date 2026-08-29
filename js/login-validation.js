export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;

export function validateEmail(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Email is required.";
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function validatePassword(value) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }

  return "";
}

export function isFormValid(email, password) {
  return !validateEmail(email) && !validatePassword(password);
}
