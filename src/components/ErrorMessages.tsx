interface errorMessageProps {
  messages: string[];
}
export const ErrorMessages: React.FC<errorMessageProps> = ({ messages }) => (
  <>
    {messages.forEach((entry) => {
      <h1>entry</h1>;
    })}
  </>
);
