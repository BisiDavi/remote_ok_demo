export default function FallBackImage({ companyName }) {
  const companyNameArr = companyName.split("");
  const firstLetter = companyNameArr[0];
  return (
    <div className="fallbackImage">
      <div className="company-logo-letter">
        <h4>{firstLetter}</h4>
      </div>
      <style jsx>{`
        .company-logo-letter {
          padding: 15px 20px;
          border: 2px solid black;
          border-radius: 5px;
          height: 100%;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }
        .company-logo-letter h4 {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 30px;
          margin-bottom: 0px;
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
      `}</style>
    </div>
  );
}
