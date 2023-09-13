export function validateMaths(estimate: string) {
  let errors: string[] = [];
  if (estimate !== "4") {
    errors.push("Incorrect maths");
  }
  return errors;
}
