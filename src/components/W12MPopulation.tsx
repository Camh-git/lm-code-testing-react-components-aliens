import { ErrorMessages } from "./ErrorMessages";
interface PlanetPopProps {
  population: number;
  onChangePop: (value: number) => void;
  validate: (value: number) => string[];
}

const W12MPopulation: React.FC<PlanetPopProps> = ({
  population,
  onChangePop,
  validate,
}) => (
  <>
    <label htmlFor="Pop">Number of beings: </label>
    <input
      id="Pop"
      type="number"
      value={population}
      onChange={(e) => onChangePop(e.target.valueAsNumber)}
    />
    <ErrorMessages messages={validate(population)} />
  </>
);

export default W12MPopulation;
