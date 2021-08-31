interface AppProps {
  text: string;
  btnClassName?: string;
  buttonColor?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ type, text, ...props }: AppProps) {
  return (
    <>
      <button className="button" {...props} type={type}>
        {text}
      </button>
      <style jsx>
        {`
          button.button {
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            background-color: red;
            font-weight: bold;
            color: white;
            width: 150px;
            font-size: 20px;
            cursor: pointer;
          }
          button.button:hover {
            background-color: transparent;
            border: 2px solid red;
          }
        `}
      </style>
    </>
  );
}
