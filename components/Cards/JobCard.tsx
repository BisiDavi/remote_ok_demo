import { useState } from "react";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";
import { RedButton, FallBackImage } from "@imports/.";
import { PostJobAt } from "@utils/date";
import colors from "@utils/colors";
import CompanyLogo from "@components/Logo/CompanyLogo";
import styles from "./card.module.css";
import useTheme from "@hooks/useTheme";
import Tags from "@components/Tags";

const DynamicJobDescription = dynamic(() => import("./JobdescriptionCard"));

const JobCard = ({ data }: IJobCardProps) => {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showJobDescription, setJobDescription] = useState(false);
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";

  const { slug, logo, company, position, location, tags, date, apply_url } =
    data;
  console.log("datat", data);

  function displayJobDescription() {
    setJobDescription(!showJobDescription);
  }

  const displayCompanyLogo = logo ? (
    <CompanyLogo logo={logo} />
  ) : company ? (
    <FallBackImage companyName={company} />
  ) : (
    <FallBackImage companyName={company} />
  );

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
        className={`${styles.card} ${cardStyle} card my-3 container py-0 px-0`}
      >
        <Card.Body
          className={`${styles.row} row d-flex align-items-center py-1`}
        >
          {displayCompanyLogo}
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
                <Tags tags={tags} />
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
      <style jsx>
        {`
          .light: {
            backgroundcolor: ${colors.white};
            color: ${colors.black};
          }
          .dark: {
            color: ${colors.white};
            backgroundcolor: ${colors.brownish};
          }
        `}
      </style>
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
