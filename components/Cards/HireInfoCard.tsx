import Link from "next/link";
import colors from "@utils/colors";
import { Button } from "@imports/.";
import useTheme from "@hooks/useTheme";
import styles from "./card.module.css";

export const HireInfoCard = ({ hideCard, hidePostJobCard }) => {
  const { dark } = useTheme();
  const hireCardStyle = dark ? "dark" : "light";
  return hidePostJobCard ? (
    <>
      <div className={`${styles.hireInfoCard} ${hireCardStyle} card`}>
        <span className={`${styles.hiretext} hiretext`}>
          <p className={`${styles.textMobile} textmobile `}>
            <span className={`${styles.textMobile}`}>👉 Hiring remotely? </span>{" "}
            <span className={`${styles.textDesktop} visitSite`}>
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
          <div className={`${styles.hireButton} hire-now`}>
            <span>
              <Link href="/hire-remotely" passHref>
                <a>
                  <Button text="Post a job" />
                </a>
              </Link>
            </span>
            <span onClick={hideCard}>
              <Button text="Hide this" />
            </span>
          </div>
        </span>
      </div>
      <style jsx>{`
        .light {
          background-color: ${colors.white};
          color: ${colors.black};
        }
        .card {
          background-color: white;
          border-radius: 5px;
          margin: auto;
          z-index: 20;
          position: relative;
          box-shadow: 1px 2px 4px rgb(0 0 0 / 3%);
          border: none;
          box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0/7%),
            0 1px 1.5px 0 rgb(0 0 0/5%);
          font-family: "Nunito", sans-serif;
        }
        .card:hover {
          background-color: #efefef;
        }
        .hire-now span {
          margin: 0px 20px;
        }
        .hiretext {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
        }

        .visitSite {
          font-weight: bold;
        }
        .textmobile {
          margin: 0px;
          font-weight: bold;
        }

        .hire-now {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .dark: {
          color: ${colors.white};
          background-color: ${colors.brownish};
        }
      `}</style>
    </>
  ) : null;
};
