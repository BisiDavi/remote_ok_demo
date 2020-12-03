import { Card } from 'react-bootstrap'
import { RedButton, CardButton } from "../../imports";

export const HireInfoCard = () => {
  return (
    <Card className="bg-white w-75 p-3 mx-auto" body>
      <span className="d-flex mx-auto">
        <p>
          👉 Hiring remotely? Reach <u>1,000,000+ remote workers</u> on the 🏆
          #1 remote jobs board
        </p>
        <RedButton text="Post a job" />
        <RedButton text="Hide this" />
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
