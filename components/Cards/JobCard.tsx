/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { RedButton, FallBackImage } from "@imports/.";
import emojiStrip from "emoji-strip";
import { JobPostedAt } from "@utils/date";
import { LazyloadImg } from "@components/Lazyload/.";
import styles from "./card.module.css";

let keyId = 1102;
const generateKeyID = () => {
  keyId += 1;
  return keyId;
};

const JobCard = ({ data }: IJobCardProps) => {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showJobDescription, setJobDescription] = useState(false);

  const { slug, logo, company, position, description, location, tags, date } =
    data;
  console.log("datat", data);
  const DisplayCompanyLogo = () => {
    return (
      <div className={`${styles.Logo}`}>
        <LazyloadImg>
          <img src={logo} className={`${styles.companyLogo}`} alt={company} />
        </LazyloadImg>
      </div>
    );
  };

  console.log("showJobDescription", showJobDescription);

  function displayJobDescription() {
    setJobDescription(!showJobDescription);
  }

  const CompanyLogo = logo
    ? DisplayCompanyLogo()
    : company
    ? FallBackImage(company)
    : FallBackImage(company);

  const displayFourTags = () => {
    if (tags !== undefined && tags.length > 0) {
      const fourTags = tags.slice(0, 4);
      return fourTags.map((tag) => (
        <li
          className={`${styles.skilltag} list-unstyled m-2 btn btn-outline-dark h-25`}
          key={`${tag}-${slug}-${generateKeyID()}`}
        >
          {tag}
        </li>
      ));
    }
  };

  const Checkworldwide = (location) => {
    if (location === "Worldwide") {
      return `🌍 ${location}`;
    } else {
      return location;
    }
  };

  return (
    <>
      <Card
        key={slug}
        onClick={displayJobDescription}
        onMouseEnter={() => setShowApplyButton(true)}
        onMouseLeave={() => setShowApplyButton(false)}
        className={`${styles.card} my-2 container py-0 px-0`}
      >
        <Card.Body
          className={`${styles.row} row d-flex align-items-center py-1`}
        >
          {CompanyLogo}
          <div className={`${styles.companyprofile} col-lg-8`}>
            <div className={`${styles.cardText} col-lg-4`}>
              <h3>{position}</h3>
              <span className={`${styles.mobileRow} d-flex align-items-center`}>
                <h4 className="font-weight-300 mr-1">{company}</h4>
                {location.length > 2 ? (
                  <div className={styles.location}>
                    {Checkworldwide(location)}
                  </div>
                ) : null}
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
          <div className={`${styles.duration} col-lg-1`}>
            {JobPostedAt(date)}
          </div>
          <div className="d-none d-sm-block">
            {showApplyButton ? (
              <RedButton btnClassName={styles.applyBtn} text="Apply" />
            ) : null}
          </div>
        </Card.Body>
      </Card>
      {showJobDescription && (
        <div className="description container px-5 py-3 bg-white">
          <h4 className="text-left font-weight-bold my-3">
            Hire a Remote {position} at {company}{" "}
          </h4>
          <ReactMarkdown
            className={styles.reactmarkdown}
            remarkPlugins={[remarkGfm]}
          >
            {emojiStrip(description.replaceAll("â", "'"))}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default JobCard;

export interface IJobCardProps {
  data: {
    slug: string;
    logo: string;
    company: string;
    position: string;
    description: string;
    location: string;
    tags: string[];
    date: string;
  };
}
