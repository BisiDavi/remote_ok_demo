import { Card } from "react-bootstrap";
import { RedButton, CardButton } from "../../imports";

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

interface JobCardProps {
  cardImg: string;
  imgAlt: string;
  companyName: string;
  jobRole: string;
  location: string;
  tags: string[];
  duration: string;
}

export const JobCard = ({
  cardImg,
  imgAlt,
  companyName,
  jobRole,
  location,
  tags,
  duration
}: JobCardProps) => {
  return (
    <Card className="my-2 d-flex container" body>
      <div className="row">
        <img src={cardImg} className="rounded col-lg-1" alt={imgAlt} />
        <div className="card-text col-lg-4 mr-5">
          <h4 className="font-weight-300">{companyName}</h4>
          <h3>{jobRole}</h3>
          <div className="pill bg-dark t">{location}</div>
        </div>
        <div className="col-lg-4 tags">
          <ul>
            {tags.map(tag => (
              <li className="rounded" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="duration col-lg-1">{duration}</div>

        <div className="col-lg-2">
          <RedButton text="Apply" />
        </div>

        
      </div>
    </Card>
  );
};
