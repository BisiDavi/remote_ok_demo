import { Button } from "react-bootstrap";

interface AppProps {
  text: string;
  btnClassName?: string;
  buttonColor?: string;
}

export const WhiteButton = ({ text, btnClassName }: AppProps) => {
  return (
    <Button className={btnClassName} variant="outline-light">
      {text}
    </Button>
  );
};

export const GreenButton = ({ text, btnClassName }: AppProps) => {
  return (
    <Button className={btnClassName} variant="outline-success">
      {text}
    </Button>
  );
};

export const RedButton = ({ text, btnClassName }: AppProps) => {
  return (
    <Button className={btnClassName} variant="outline-danger">
      {text}
    </Button>
  );
};

export const CardButton = ({ buttonColor, text }: AppProps) => {
  return <Button variant={buttonColor}>{text}</Button>;
};
