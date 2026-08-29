import { describe, it, expect } from "vitest";
import {
  validateEmail,
  validatePassword,
  isFormValid,
} from "../js/login-validation.js";

describe("validateEmail", () => {
  it("returns an error when email is empty", () => {
    expect(validateEmail("")).toBe("Email is required.");
    expect(validateEmail("   ")).toBe("Email is required.");
  });

  it("returns an error when email format is invalid", () => {
    expect(validateEmail("not-an-email")).toBe("Please enter a valid email address.");
    expect(validateEmail("missing@domain")).toBe("Please enter a valid email address.");
    expect(validateEmail("@example.com")).toBe("Please enter a valid email address.");
  });

  it("returns empty string for a valid email", () => {
    expect(validateEmail("user@example.com")).toBe("");
    expect(validateEmail("  user@example.com  ")).toBe("");
  });
});

describe("validatePassword", () => {
  it("returns an error when password is empty", () => {
    expect(validatePassword("")).toBe("Password is required.");
  });

  it("returns an error when password is shorter than 8 characters", () => {
    expect(validatePassword("1234567")).toBe("Password must be at least 8 characters.");
  });

  it("returns empty string for a password with at least 8 characters", () => {
    expect(validatePassword("12345678")).toBe("");
    expect(validatePassword("password")).toBe("");
  });
});

describe("isFormValid", () => {
  it("returns false when email or password is invalid", () => {
    expect(isFormValid("", "")).toBe(false);
    expect(isFormValid("user@example.com", "short")).toBe(false);
    expect(isFormValid("invalid-email", "12345678")).toBe(false);
  });

  it("returns true when both fields are valid", () => {
    expect(isFormValid("user@example.com", "12345678")).toBe(true);
  });
});
