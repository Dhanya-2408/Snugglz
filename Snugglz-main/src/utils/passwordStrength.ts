/**
 * Password validator for login pages
 */
import value from "../assets/scss/_themes-vars.module.scss";

// has number
const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: string) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: string) =>
  new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

type PasswordStrengthKey = "label" | "color";
export type PasswordStrength = Record<PasswordStrengthKey, string>;

// set color based on password strength
export const strengthColor = (count: number): PasswordStrength => {
  if (count < 2) return { label: "Poor", color: value.errorMain };
  if (count < 3) return { label: "Weak", color: value.warningDark };
  if (count < 4) return { label: "Normal", color: value.orangeMain };
  if (count < 5) return { label: "Good", color: value.successMain };
  if (count < 6) return { label: "Strong", color: value.successDark };
  return { label: "Poor", color: value.errorMain };
};

// password strength indicator
export const strengthIndicator = (password: string) => {
  let strengths = 0;
  if (hasNumber(password)) strengths += 1;
  if (hasSpecial(password)) strengths += 1;
  if (hasMixed(password)) strengths += 1;
  if (password.length > 5) strengths += 1;
  if (password.length > 7) strengths += 1;
  return strengths;
};
