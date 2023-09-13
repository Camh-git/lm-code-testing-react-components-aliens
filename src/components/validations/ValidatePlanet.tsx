export function validatePlanetName(PlanetName: string) {
  let errors: string[] = [];
  if (PlanetName.length < 2) {
    errors.push("Planet name too short");
  } else if (PlanetName.length > 49) {
    errors.push("Planet name too long");
  }
  if (!PlanetName.match(/^[^a-zA-Z0-9]+$/)) {
    errors.push("Name cannot contain special chars");
  }
  return errors;
}
