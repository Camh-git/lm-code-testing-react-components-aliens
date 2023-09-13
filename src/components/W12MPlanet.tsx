import { ErrorMessages } from "./ErrorMessages";
interface PlanetNameProps {
  planet: string;
  onChangePlanet: (value: string) => void;
  validate: (value: string) => string[];
}

const W12MPlanet: React.FC<PlanetNameProps> = ({
  planet,
  onChangePlanet,
  validate,
}) => (
  <>
    <label htmlFor="planet">Planet Name: </label>
    <input
      id="planet"
      type="text"
      value={planet}
      onChange={(e) => onChangePlanet(e.target.value)}
    />
    <ErrorMessages messages={validate(planet)} />
  </>
);

export default W12MPlanet;
