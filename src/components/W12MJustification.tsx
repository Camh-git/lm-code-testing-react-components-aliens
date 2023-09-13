import { ErrorMessages } from "./ErrorMessages";
interface JustificatonProps {
  reason: string;
  onChangeReason: (value: string) => void;
  validate: (value: string) => string[];
}

const W12MSJustification: React.FC<JustificatonProps> = ({
  reason,
  onChangeReason,
  validate,
}) => (
  <>
    <label htmlFor="reason">Reason for sparing: </label>
    <textarea
      id="reason"
      value={reason}
      onChange={(e) => onChangeReason(e.target.value)}
    />
    <ErrorMessages messages={validate(reason)} />
  </>
);

export default W12MSJustification;
