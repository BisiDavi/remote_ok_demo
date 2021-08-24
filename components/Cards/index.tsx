import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { RedButton, CardButton } from "@imports/.";
import styles from "./card.module.css";

export const HireInfoCard = ({ hideCard, hidePostJobCard }) => {
  return hidePostJobCard ? (
    <Card className={`${styles.hireInfoCard} bg-white container mx-auto`} body>
      <span className={`${styles.hiretext} d-flex pt-3 align-items-center`}>
        <p
          className={`${styles.textMobile} ml-5 mb-0 text-center font-weight-bold`}
        >
          <span className={`${styles.textMobile}`}>👉 Hiring remotely? </span>{" "}
          <span className={`${styles.textDesktop} font-weight-bold`}>
            {" "}
            Visit{" "}
            <a target="_blank" rel="noreferrer" href="https://remoteok.io/">
              Remote OK{" "}
            </a>{" "}
            🏆 #1 remote jobs board PS:{" "}
            <u>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://olubisi-david.vercel.app/"
              ></a>
              This is a demo project.
            </u>
          </span>
        </p>
        <span
          className={`${styles.hireButton} ml-4 d-flex h-25 w-25 justify-content-around`}
        >
          <Link href="/hire-remotely" passHref>
            <a>
              <RedButton text="Post a job" />
            </a>
          </Link>
          <span onClick={hideCard}>
            <RedButton text="Hide this" />
          </span>
        </span>
      </span>
    </Card>
  ) : null;
};

export const SponsoredCard = ({ cardImg, imgAlt }) => {
  return (
    <Card className="my-2 d-flex" body>
      <Image
        height="100px"
        width="100px"
        src={cardImg}
        className="rounded"
        alt={imgAlt}
      />
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
    <div className="fallbackImage">
      <div className="company-logo-letter">
        <h4>{firstLetter}</h4>
      </div>
      <style jsx>{`
        .company-logo-letter {
          padding: 15px 20px;
          border: 2px solid black;
          border-radius: 5px;
          height: 100%;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }
        .company-logo-letter h4 {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 30px;
          margin-bottom: 0px;
        }
      `}</style>
    </div>
  );
};
