import colors from "@utils/colors";
import useTheme from "@hooks/useTheme";

export default function FormCard({ title, children }) {
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";
  return (
    <>
      <div className={`card ${cardStyle}`}>
        <h3>{title}</h3>
        {children}
      </div>
      <style jsx>
        {`
          .card {
            margin: 30px 20px;
            padding: 20px;
            box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
              0 1px 1.5px 0 rgb(0 0 0 / 5%);
          }
          .light: {
            backgroundcolor: ${colors.white};
            color: ${colors.black};
          }
          .dark: {
            color: ${colors.white};
            backgroundcolor: ${colors.brownish};
          }
          .card h3 {
            text-align: center;
            font-size: 12px;
            margin-top: px;
            width: fit-content;
            justify-content: center;
            display: flex;
            padding: 10px;
            margin: auto;
            background: #fff;
            margin-top: -30px;
            text-transform: uppercase;
            font-size: 14px;
            color: #444;
            font-weight: 800;
            padding-left: 7px;
            border-top: 1px solid #ddd;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
            margin-bottom: 20px;
          }
          @media (max-width: 768px) {
            .card {
              margin: 30px 5px;
            }
          }
        `}
      </style>
    </>
  );
}
