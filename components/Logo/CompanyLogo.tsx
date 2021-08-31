/* eslint-disable @next/next/no-img-element */
import LogoContentLoader from "@components/Lazyload/LogoContentLoader";

export default function CompanyLogo({ logo }) {
  return (
    <>
      <div className="logo">
        {logo ? (
          <img src={logo} className="companyLogo" alt={logo} />
        ) : (
          <LogoContentLoader />
        )}
      </div>
      <style jsx>
        {`
          .logo {
            height: 100%;
            width: 60px;
            margin: 5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .companyLogo {
            border-radius: 5px;
            height: 100%;
            width: 100px;
            padding: 0px;
            margin: 10px;
          }
          @media screen and (max-width: 1024px) {
            .companyLogo {
              height: 100%;
              width: 70px;
            }
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
