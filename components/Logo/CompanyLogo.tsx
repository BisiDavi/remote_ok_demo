/* eslint-disable @next/next/no-img-element */

export default function CompanyLogo({ data }) {
  return (
    <>
      <div className="logo">
        {data.logo ? (
          <img src={data.logo} className="companyLogo" alt={data.company} />
        ) : (
          <div className="loader" />
        )}
      </div>
      <style jsx>
        {`
          .logo {
            height: 100%;
            width: 100%;
            margin: 5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .loader {
            background-color: gray;
            height: 100px;
            width: 100px;
          }
          .companyLogo {
            border-radius: 5px;
            height: 100%;
            width: 100%;
            padding: 0px;
            margin: 10px;
          }
          @media screen and (max-width: 1024px) {
            .companyLogo {
              height: 100%;
              width: 70px;
            }
          }
          @media screen and (max-width: 768px) {
          }
          @media screen and (max-width: 480px) {
            .companyLogo {
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  );
}
