interface PlanetPopProps {
  population: number;
  onChangePop: (value: number) => void;
}

const W12MPopulation: React.FC<PlanetPopProps> = ({
  population,
  onChangePop,
}) => (
  <>
    <label htmlFor="Pop">Number of beings: </label>
    <input
      id="Pop"
      type="number"
      value={population}
      onChange={(e) => onChangePop(e.target.valueAsNumber)}
    />
  </>
);

export default W12MPopulation;
