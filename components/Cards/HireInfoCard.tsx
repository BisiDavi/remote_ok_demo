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
      <div
        className={`${styles.hireInfoCard} ${hireCardStyle} card container mx-auto`}
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
            className={`${styles.hireButton} col-6 col-lg-3 col-md-8 flex justify-content-around`}
          >
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

        .dark: {
          color: ${colors.white};
          backgroundcolor: ${colors.brownish};
        }
      `}</style>
    </>
  ) : null;
};
