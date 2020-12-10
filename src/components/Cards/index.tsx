import { Card } from "react-bootstrap";
import { RedButton, CardButton } from "../../imports";
import styles from "./card.module.css";

export const HireInfoCard = () => {
  return (
    <Card className="bg-white w-75 mx-auto pt-5" body>
      <span className="d-flex pt-3">
        <p className="ml-5 text-center">
          👉 Hiring remotely? Reach <u>1,000,000+ remote workers</u> on the 🏆
          #1 remote jobs board
        </p>
        <span className="ml-4 d-flex h-25 w-25 justify-content-around">
          <RedButton text="Post a job" />
          <RedButton text="Hide this" />
        </span>
      </span>
    </Card>
  );
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

export const FallBackImage = (companyName) => {
  const companyNameArr = companyName.split("");
  const firstLetter = companyNameArr[0];
  return (
    <>
      <div className="company-logo-letter">
        <h4>{firstLetter}</h4>
      </div>
      <style jsx>{`
      .company-logo-letter {
        padding: 15px 20px;
        border: 2px solid black;
        border-radius: 5px;
        margin: 0px 4px;
      }
      .company-logo-letter h4{
        font-weight: 600
      }
      `}</style>
    </>
  )
}