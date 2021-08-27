/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";
import { RedButton, FallBackImage } from "@imports/.";
import { PostJobAt } from "@utils/date";
import styles from "./card.module.css";
import LogoContentLoader from "@components/Lazyload/LogoContentLoader";
import useTheme from "@hooks/useTheme";

const DynamicJobDescription = dynamic(() => import("./JobdescriptionCard"));

const JobCard = ({ data }: IJobCardProps) => {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showJobDescription, setJobDescription] = useState(false);
  const { themeStyle } = useTheme();

  const { slug, logo, company, position, location, tags, date, apply_url } =
    data;
  console.log("datat", data);
  const DisplayCompanyLogo = () => {
    return (
      <div className={`${styles.Logo}`}>
        {logo ? (
          <img src={logo} className={`${styles.companyLogo}`} alt={company} />
        ) : (
          <LogoContentLoader />
        )}
      </div>
    );
  };

  function displayJobDescription() {
    setJobDescription(!showJobDescription);
  }

  const CompanyLogo = logo ? (
    DisplayCompanyLogo()
  ) : company ? (
    <FallBackImage companyName={company} />
  ) : (
    <FallBackImage companyName={company} />
  );

  const displayFourTags = () => {
    if (tags !== undefined && tags.length > 0) {
      const fourTags = tags.slice(0, 4);
      return fourTags.map((tag) => (
        <li
          style={themeStyle("tags")}
          className={`${styles.skilltag} list-unstyled m-2 btn btn-outline-dark h-25`}
          key={`${tag}-${slug}}`}
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
        style={themeStyle("card")}
        className={`${styles.card} card my-3 container py-0 px-0`}
      >
        <Card.Body
          className={`${styles.row} row d-flex align-items-center py-1`}
        >
          {CompanyLogo}
          <div className={`${styles.companyprofile} col-8 col-md-8`}>
            <div className={`${styles.cardText} col-lg-4 col-10`}>
              <h3>{position}</h3>
              <span className={`${styles.mobileRow} d-flex align-items-center`}>
                <h4 className="font-weight-300 mx-2">{company}</h4>
                {location.length > 2 ? (
                  <div className={`${styles.location} mx-2`}>
                    {Checkworldwide(location)}
                  </div>
                ) : null}
              </span>
            </div>
            <div
              className={`${styles.cardTags} col-5 col-md-6 col-lg-5 tags align-items-center px-0`}
            >
              <ul
                className={`${styles.groupTag} d-flex group-tags align-items-center m-0 p-0`}
              >
                {displayFourTags()}
              </ul>
            </div>
          </div>
          <div className={`${styles.duration} col-1 col-lg-1`}>
            {PostJobAt(date)}
          </div>
          <div className="d-none d-sm-block">
            {showApplyButton ? (
              <a target="_blank" rel="noreferrer" href={apply_url}>
                <RedButton btnClassName={styles.applyBtn} text="Apply" />
              </a>
            ) : null}
          </div>
        </Card.Body>
      </Card>
      {showJobDescription && <DynamicJobDescription content={data} />}
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
    apply_url: string;
  };
}
