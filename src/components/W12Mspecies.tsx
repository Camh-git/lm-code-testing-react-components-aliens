interface SpeciesNameProps {
  species: string;
  onChangeSpecies: (value: string) => void;
}

const W12MSpecies: React.FC<SpeciesNameProps> = ({
  species,
  onChangeSpecies,
}) => (
  <>
    <label htmlFor="species">Species Name: </label>
    <input
      id="species"
      type="text"
      value={species}
      onChange={(e) => onChangeSpecies(e.target.value)}
    />
  </>
);

export default W12MSpecies;
