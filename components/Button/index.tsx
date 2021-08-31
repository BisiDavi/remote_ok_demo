interface AppProps {
  text: string;
  btnClassName?: string;
  buttonColor?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button ({ type, text, btnClassName, ...props }: AppProps) {
  return (
    <button {...props} className={btnClassName} type={type}>
      {text}
    </button>
  );
};
