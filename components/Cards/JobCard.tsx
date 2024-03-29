import { useState } from "react";
import dynamic from "next/dynamic";
import { Button, FallBackImage } from "@imports/.";
import { PostJobAt } from "@utils/date";
import colors from "@utils/colors";
import CompanyLogo from "@components/Logo/CompanyLogo";
import styles from "./card.module.css";
import useTheme from "@hooks/useTheme";
import Tags from "@components/Tags";

const DynamicJobDescription = dynamic(() => import("./JobdescriptionCard"));

const JobCard = ({ data, demo }: IJobCardProps) => {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showJobDescription, setJobDescription] = useState(false);
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";

  const {
    slug,
    logo,
    company,
    position,
    location,
    tags,
    date,
    apply_url,
    createdAt,
  } = data;

  function displayJobDescription() {
    setJobDescription(!showJobDescription);
  }

  const displayCompanyLogo = logo ? (
    <CompanyLogo data={data} />
  ) : (
    company && <FallBackImage themeStyle={cardStyle} companyName={company} />
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
      <div
        key={slug}
        onClick={displayJobDescription}
        onMouseEnter={() => setShowApplyButton(true)}
        onMouseLeave={() => setShowApplyButton(false)}
        className={`${styles.card} ${cardStyle} card`}
      >
        <div className={`${styles.row} content`}>
          {demo && <div className="demo">Demo Job</div>}
          <div className="logo">{displayCompanyLogo}</div>
          <div className={`${styles.companyprofile} companyprofile`}>
            <div className={`${styles.cardText} cardText`}>
              <span className={`${styles.mobileRow} mobileRow`}>
                <h2 className="company">{company}</h2>
                <h3>{position}</h3>
                {location?.length > 2 ? (
                  <div className={`${styles.location} location`}>
                    <h6>{Checkworldwide(location)}</h6>
                  </div>
                ) : null}
              </span>
            </div>
            <div className={`${styles.cardTags} tags`}>
              <ul className={`${styles.groupTag} group-tag`}>
                <Tags tags={tags} />
              </ul>
            </div>
          </div>
          <div className={`${styles.column3} column-3`}>
            {date ? (
              <div className={`${styles.duration} date`}>{PostJobAt(date)}</div>
            ) : (
              <div className={`${styles.duration} date`}>
                {PostJobAt(createdAt)}
              </div>
            )}
            <div className="applyButton">
              {showApplyButton ? (
                <a target="_blank" rel="noreferrer" href={apply_url}>
                  <Button text="Apply" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {showJobDescription && <DynamicJobDescription content={data} />}
      <style jsx>
        {`
          .demo {
            background-color: red;
            color: white;
            font-weight: bold;
            position: absolute;
            right: 0px;
            top: 0px;
            padding: 2px 10px;
            font-size: 16px;
            font-family: "Pacifico";
          }
          .card {
            border: 1px solid #dddddd;
            display: flex;
            align-items: center;
            margin: 15px 0px;
            font-family: "Nunito", sans-serif;
            background-color: #fff;
            border: none;
            box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0/7%),
              0 1px 1.5px 0 rgb(0 0 0/5%);
          }
          .column-3 {
            display: flex;
            align-items: center;
            width: 20%;
            justify-content: space-around;
          }
          .cardText {
            width: 60%;
          }
          .tags {
            width: 40%;
          }
          .cardText h2,
          .cardText h3 {
            margin: 1px 0px;
          }
          .card .content {
            position: relative;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 1px solid #dddddd;
            width: 100%;
          }
          .group-tag {
            display: flex;
            align-items: center;
            padding: 0px;
          }
          .applyButton {
            width: 100px;
            margin: 0px 20px;
          }
          .logo {
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .companyprofile {
            width: 60%;
            justify-content: flex-start;
          }
          .location {
            padding: 10px;
            border-radius: 5px;
            width: auto;
            max-width: 100%;
          }
          .location h6 {
            font-weight: 1000;
            margin: 0;
            font-size: 12px;
          }
          .light {
            background-color: ${colors.white};
            color: ${colors.black};
          }
          .dark {
            color: ${colors.white};
            background-color: ${colors.brownish};
          }
          @media (max-width: 1024px) {
            .cardText {
              width: 50%;
            }
            .tags {
              width: 50%;
            }
          }

          @media (max-width: 768px) {
            .location h6 {
              font-size: 8px;
              padding: 0px;
              font-weight: bold;
            }
            .location {
              padding: 8px;
            }
            h3 {
              font-size: 12px;
            }
            h2.company {
              font-size: 16px;
              font-weight: 1000;
            }
            .column-3 {
              width: 25%;
            }
          }

          @media (max-width: 500px) {
            .demo {
              font-size: 13px;
            }
            .applyButton {
              display: none;
            }
            .cardText {
              width: 80%;
            }
            .column-3 {
              width: fit-content;
            }
            .location {
              width: fit-content;
            }
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
    createdAt?: string;
    apply_url: string;
  };
  demo?: boolean;
}
