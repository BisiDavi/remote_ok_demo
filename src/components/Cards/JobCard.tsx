import { Card } from "react-bootstrap";
import { RedButton,FallBackImage } from "../../imports";
import { IJobCardProps } from "../../types";
import { LazyloadImg, LazyloadCard } from "../Lazyload";
import styles from "./card.module.css";

let keyId = 1102;
const generateKeyID = () => {
  keyId += 1;
  return keyId;
};

const JobCard = ({
  slug,
  cardImg,
  imgAlt,
  companyName,
  jobRole,
  location,
  tags,
  duration
}: IJobCardProps) => {
  const DisplayCompanyLogo = () => {
    return (
      <LazyloadImg>
        <img 
          src={cardImg} 
          className={`${styles.companyLogo} col-lg-1`}
          alt={imgAlt} 
        />        
      </LazyloadImg>
    );
  };

  const CompanyLogo = cardImg ? DisplayCompanyLogo() : FallBackImage(companyName);

  const displayFourTags = () => {
    if (tags !== undefined && tags.length > 0) {
      const fourTags = tags.slice(0, 4);
      return fourTags.map(tag => (
        <li
          className="list-unstyled m-2 btn btn-outline-dark h-25"
          key={`${tag}-${slug}-${generateKeyID()}`}
        >
          {tag}
        </li>
      ));
    }
  };

  return (
    <LazyloadCard>
      <Card key={slug} className={`${styles.card} my-2 container py-0 px-0`}>
        <Card.Body className="py-1 d-flex align-items-center">
          <div className="row d-flex align-items-center py-1 px-2 w-100">
            {CompanyLogo}
            <div className="card-text col-lg-4">
              <h4 className="font-weight-300">{companyName}</h4>
              <h3>{jobRole}</h3>
              <div className="">{location}</div>
            </div>
            <div className="col-lg-4 tags d-flex align-items-center px-0">
              <ul
                className={`${styles.groupTag} d-flex group-tags align-items-center m-0 p-0`}
              >
                {displayFourTags()}
              </ul>
            </div>
            <div className="duration col-lg-2">{duration}</div>
            <div className="col-lg-1">
              <RedButton text="Apply" />
            </div>
          </div>
        </Card.Body>        
      </Card>
    </LazyloadCard>
  );
};

export default JobCard;
