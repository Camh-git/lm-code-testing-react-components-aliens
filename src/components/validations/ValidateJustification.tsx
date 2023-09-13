export function validateJustification(justification: string) {
  let errors: string[] = [];
  if (justification.length < 17) {
    errors.push("Reason too short");
  } else if (justification.length > 153) {
    errors.push("Reason too long");
  }
  return errors;
}
