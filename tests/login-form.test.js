import { describe, it, expect, beforeEach, vi } from "vitest";
import { JSDOM } from "jsdom";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "..", "index.html");

async function loadLoginForm() {
  vi.resetModules();

  const html = fs.readFileSync(htmlPath, "utf8");
  const dom = new JSDOM(html, { url: "http://localhost/" });

  global.document = dom.window.document;
  global.window = dom.window;

  await import("../js/login.js");

  return dom;
}

describe("login form submit button", () => {
  beforeEach(async () => {
    await loadLoginForm();
  });

  it("disables submit button when the form is invalid", () => {
    const submitBtn = document.querySelector(".submit-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    expect(submitBtn.disabled).toBe(true);

    emailInput.value = "user@example.com";
    emailInput.dispatchEvent(new window.Event("input", { bubbles: true }));
    expect(submitBtn.disabled).toBe(true);

    passwordInput.value = "12345678";
    passwordInput.dispatchEvent(new window.Event("input", { bubbles: true }));
    expect(submitBtn.disabled).toBe(false);
  });

  it("shows error messages below fields on submit when invalid", () => {
    const form = document.getElementById("login-form");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    form.requestSubmit();

    expect(emailError.textContent).toBe("Email is required.");
    expect(passwordError.textContent).toBe("Password is required.");
  });
});
