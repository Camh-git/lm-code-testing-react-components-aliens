interface JustificatonProps {
  reason: string;
  onChangeReason: (value: string) => void;
}

const W12MSJustification: React.FC<JustificatonProps> = ({
  reason,
  onChangeReason,
}) => (
  <>
    <label htmlFor="reason">Reason for sparing: </label>
    <textarea
      id="reason"
      value={reason}
      onChange={(e) => onChangeReason(e.target.value)}
    />
  </>
);

export default W12MSJustification;
