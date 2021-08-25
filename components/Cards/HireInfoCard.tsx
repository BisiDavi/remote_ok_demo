import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { RedButton, CardButton } from "@imports/.";
import useTheme from "@hooks/useTheme";
import styles from "./card.module.css";

export const HireInfoCard = ({ hideCard, hidePostJobCard }) => {
  const { themeStyle } = useTheme();
  return hidePostJobCard ? (
    <Card
      style={themeStyle("hire")}
      className={`${styles.hireInfoCard} container mx-auto`}
      body
    >
      <span
        className={`${styles.hiretext} row align-items-center justify-content-between p-2`}
      >
        <p
          className={`${styles.textMobile} mb-0 font-weight-bold col-5 col-lg-9 col-md-12`}
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
          className={`${styles.hireButton} col-6 col-lg-3 col-md-8 d-flex justify-content-around`}
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
