import { Button } from "react-bootstrap";

export const WhiteButton = ({ text, btnClassName }) => {
  return <Button className={btnClassName} variant="outline-light">{text}</Button>;
};

export const GreenButton = ({ text, btnClassName }) => {
  return <Button className={btnClassName} variant="outline-success">{text}</Button>;
};

export const RedButton = ({ text, btnClassName }) => {
  return <Button className={btnClassName} variant="outline-danger">{text}</Button>;
};

export const CardButton = ({ buttonColor, text }) => {
  return <Button variant={buttonColor}>{text}</Button>;
};
