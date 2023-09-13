export function validatePopulation(population: number) {
  let errors: string[] = [];
  if (population < 1000000) {
    errors.push("Population too small");
  }
  if (population.toString().match(/^[^a-zA-Z0-9]+$/)) {
    errors.push("Population must only contain letters");
  }
  return errors;
}
