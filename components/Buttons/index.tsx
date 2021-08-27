import { Button } from "react-bootstrap";

interface AppProps {
  text: string;
  btnClassName?: string;
  buttonColor?: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const GreenButton = ({ text, btnClassName, ...props }: AppProps) => {
  return (
    <Button {...props} className={btnClassName} variant="outline-success">
      {text}
    </Button>
  );
};

export const RedButton = ({ type, text, btnClassName, ...props }: AppProps) => {
  return (
    <Button
      {...props}
      className={btnClassName}
      variant="outline-danger"
      type={type}
    >
      {text}
    </Button>
  );
};
