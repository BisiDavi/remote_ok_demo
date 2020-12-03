import { Button } from "react-bootstrap";

export const WhiteButton = ({ text }) => {
  return <Button variant="outline-light">{text}</Button>;
};

export const GreenButton = ({ text }) => {
  return <Button variant="outline-success">{text}</Button>;
};

export const RedButton = ({ text }) => {
  return <Button variant="outline-danger">{text}</Button>;
};

export const CardButton = ({ buttonColor, text }) => {
  return <Button variant={buttonColor}>{text}</Button>;
};
