import { ErrorMessages } from "./ErrorMessages";

interface SpeciesNameProps {
  species: string;
  onChangeSpecies: (value: string) => void;
  validate: (value: string) => string[];
}

const W12MSpecies: React.FC<SpeciesNameProps> = ({
  species,
  onChangeSpecies,
  validate,
}) => (
  <>
    <label htmlFor="species">Species Name: </label>
    <input
      id="species"
      type="text"
      value={species}
      onChange={(e) => onChangeSpecies(e.target.value)}
    />
    <ErrorMessages messages={validate(species)} />
  </>
);

export default W12MSpecies;
