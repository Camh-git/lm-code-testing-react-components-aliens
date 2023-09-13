export function validateSpeciesName(speciesName: string) {
  let errors: string[] = [];
  if (speciesName.length < 3) {
    errors.push("Species name too short");
  } else if (speciesName.length > 32) {
    errors.push("Species name too long");
  }
  if (!speciesName.match(/^[^a-zA-Z]+$/)) {
    errors.push("Name contains numbers or special chars");
  }
  return errors;
}
