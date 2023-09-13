interface errorMessageProps {
  messages: string[];
}
export const ErrorMessages: React.FC<errorMessageProps> = ({ messages }) => (
  <>
    {messages.forEach((entry) => {
      <h4 style={{ color: "red" }}>{entry}</h4>;
    })}
  </>
);
