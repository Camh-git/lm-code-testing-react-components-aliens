interface PlanetNameProps {
  planet: string;
  onChangePlanet: (value: string) => void;
}

const W12MPlanet: React.FC<PlanetNameProps> = ({ planet, onChangePlanet }) => (
  <>
    <label htmlFor="planet">Planet Name: </label>
    <input
      id="planet"
      type="text"
      value={planet}
      onChange={(e) => onChangePlanet(e.target.value)}
    />
  </>
);

export default W12MPlanet;
