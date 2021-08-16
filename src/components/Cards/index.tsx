import { Card } from "react-bootstrap";
import { RedButton, CardButton } from "../../imports";
import styles from "./card.module.css";

export const HireInfoCard = ({ hideCard, hidePostJobCard }) => {
  return hidePostJobCard
  ? <Card className={`${styles.hireInfoCard} bg-white container mx-auto`} body>
      <span className={`${styles.hiretext} d-flex pt-3 align-items-center`}>
        <p className={`${styles.textMobile} ml-5 mb-0 text-center`}>
          <span className={`${styles.textMobile}`}>👉 Hiring remotely? </span>{' '}
          <span className={`${styles.textDesktop} font-weight-bold`}>
            {' '}
            Visit <a target="_blank" rel="" href="https://remoteok.io/">Remote OK </a> 🏆 #1 remote jobs
            board{' '} PS: <u>This is a demo project.</u>
          </span>
        </p>
        <span
          className={`${styles.hireButton} ml-4 d-flex h-25 w-25 justify-content-around`}
        >
          <RedButton text="Post a job" />
          <span onClick={hideCard}>
            <RedButton text="Hide this" />
          </span>
        </span>
      </span>
    </Card> : null
};

export const SponsoredCard = ({ cardImg, imgAlt }) => {
  return (
    <Card className="my-2 d-flex" body>
      <img src={cardImg} className="rounded" alt={imgAlt} />
      <span className="card-text">
        <h4></h4>
      </span>
      <CardButton buttonColor="outline-success" text="Talk with us" />
    </Card>
  );
};

export const FallBackImage = companyName => {
  const companyNameArr = companyName.split("");
  const firstLetter = companyNameArr[0];
  return (
    <div className="fallbackImage col-lg-1">
      <div className="company-logo-letter">
        <h4>{firstLetter}</h4>
      </div>
      <style jsx>{`
        .company-logo-letter {
          padding: 15px 20px;
          border: 2px solid black;
          border-radius: 5px;
          margin: 10px 16px;
        }
        .company-logo-letter h4 {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};
