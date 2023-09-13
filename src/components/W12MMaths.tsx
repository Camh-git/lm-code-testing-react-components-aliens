import { ErrorMessages } from "./ErrorMessages";
interface MathsProps {
  answer: string;
  onChangeCalc: (value: string) => void;
  validate: (value: string) => string[];
}

const W12MMaths: React.FC<MathsProps> = ({
  answer,
  onChangeCalc,
  validate,
}) => (
  <>
    <label htmlFor="calc">What is 2+2? </label>
    <select id="calc" onChange={(e) => onChangeCalc(e.target.value)}>
      <option value="Not 4">Not 4</option>
      <option value="4"> 4</option>
    </select>
    <ErrorMessages messages={validate(answer)} />
  </>
);

export default W12MMaths;
