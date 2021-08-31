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
          <span className={`${styles.hireButton} hire-now`}>
            <Link href="/hire-remotely" passHref>
              <a>
                <Button text="Post a job" />
              </a>
            </Link>
            <span onClick={hideCard}>
              <Button text="Hide this" />
            </span>
          </span>
        </span>
      </div>
      <style jsx>{`
        .light {
          backgroundcolor: ${colors.white};
          color: ${colors.black};
        }
        .card {
          background-color: white;
          border: 1px solid gray;
          border-radius: 5px;
          margin: auto;
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
          margin-bottom: 0px;
          font-weight: bold;
        }

        .hire-now {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .dark: {
          color: ${colors.white};
          backgroundcolor: ${colors.brownish};
        }
      `}</style>
    </>
  ) : null;
};
