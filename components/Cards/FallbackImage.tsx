import colors from "@utils/colors";
interface FallBackImageProps {
  themeStyle?: string;
  companyName: string;
}

export default function FallBackImage({
  companyName,
  themeStyle,
}: FallBackImageProps) {
  const companyNameArr = companyName.split("");
  const firstLetter = companyNameArr[0];
  return (
    <div className="fallbackImage">
      <div className={`${themeStyle} company-logo-letter`}>
        <h4>{firstLetter}</h4>
      </div>
      <style jsx>{`
        .company-logo-letter {
          padding: 2px 10px;
          border: 2px solid black;
          border-radius: 5px;
          height: 80px;
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }
        .fallbackImage h4 {
          margin: 0px;
        }
        .light {
          border: 2px solid ${colors.black};
          color: ${colors.black};
        }
        .dark {
          border: 2px solid ${colors.white};
          color: ${colors.white};
        }
        .company-logo-letter h4 {
          font-family: "Nunito", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 30px;
          margin: 0px;
        }

        @media (max-width: 768px) {
          .company-logo-letter {
            width: 70px;
            height: 60px;
          }
          .company-logo-letter h4 {
            font-size: 25px;
          }
        }

        @media (max-width: 768px) {
          .company-logo-letter h4 {
            font-size: 20px;
            padding: 0px;
          }

          .company-logo-letter {
            width: 60px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .company-logo-letter h4 {
            font-size: 16px;
            padding: 0px;
          }

          .company-logo-letter {
            width: 50px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
