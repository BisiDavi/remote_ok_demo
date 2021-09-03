interface AppProps {
  text: string;
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
            font-size: 20px;
            cursor: pointer;
          }
          button:hover {
            background-color: transparent;
            border: 2px solid red;
            color: red;
          }
          @media (max-width: 768px) {
            button.button {
              font-size: 14px;
            }
          }
          @media (max-width: 480px) {
            button.button {
              font-size: 14px;
              padding: 8px 15px;
              width: 100px;
            }
          }
        `}
      </style>
    </>
  );
}
