import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { RedButton, FallBackImage } from '../../imports';
import { IJobCardProps } from '../../types';
import { JobPostedAt } from '../../utils/date';
import { LazyloadImg, LazyloadCard } from '../Lazyload';
import styles from './card.module.css';

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
  const [showApplyButton, setShowApplyButton] = useState(false);

  const DisplayCompanyLogo = () => {
    return (
      <div className={`${styles.Logo} col-lg-1`}>
        <LazyloadImg>
          <img src={cardImg} className={`${styles.companyLogo}`} alt={imgAlt} />
        </LazyloadImg>
      </div>
    );
  };

  const CompanyLogo = cardImg
    ? DisplayCompanyLogo()
    : companyName
    ? FallBackImage(companyName)
    : FallBackImage(jobRole);

  const displayFourTags = () => {
    if (tags !== undefined && tags.length > 0) {
      const fourTags = tags.slice(0, 4);
      return fourTags.map(tag => (
        <li
          className={`${styles.skilltag} list-unstyled m-2 btn btn-outline-dark h-25`}
          key={`${tag}-${slug}-${generateKeyID()}`}
        >
          {tag}
        </li>
      ));
    }
  };

  const Checkworldwide = location => {
    if (location === 'Worldwide') {
      return `🌍 ${location}`;
    } else {
      return location;
    }
  };

  return (
    <LazyloadCard>
      <Card
        key={slug}
        onMouseEnter={() => setShowApplyButton(true)}
        onMouseLeave={() => setShowApplyButton(false)}
        className={`${styles.card} my-2 container py-0 px-0`}
      >
        <Card.Body
          className={`${styles.cardbody} py-1 d-flex align-items-center`}
        >
          <div
            className={`${styles.row} row d-flex align-items-center py-1 px-2 w-100`}
          >
            {CompanyLogo}
            <div className={`${styles.companyprofile} col-lg-9`}>
              <div className={`${styles.cardText} col-lg-4`}>
                <h3>{jobRole}</h3>
                <span className={`${styles.mobileRow} d-flex align-items-center`}>
                  <h4 className="font-weight-300 mr-1">{companyName}</h4>
                  {(location.length > 2) ?
                  <div className={styles.location}>
                    {Checkworldwide(location)}
                  </div> : null}
                </span>
              </div>
              <div
                className={`${styles.cardTags} col-lg-5 tags d-flex align-items-center px-0`}
              >
                <ul
                  className={`${styles.groupTag} d-flex group-tags align-items-center m-0 p-0`}
                >
                  {displayFourTags()}
                </ul>
              </div>
            </div>
            <div className={`${styles.duration} col-lg-1`}>{JobPostedAt(duration)}</div>
            <div className="col-1 d-none d-sm-block">
              {showApplyButton ? <RedButton text="Apply" /> : null}
            </div>
          </div>
        </Card.Body>
      </Card>
    </LazyloadCard>
  );
};

export default JobCard;
