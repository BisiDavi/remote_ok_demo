import Link from "next/link";
import Logo from "@components/Logo";
import colors from "@utils/colors";
import useTheme from "@hooks/useTheme";
import ThemeButton from "@components/Buttons/ThemeButton";
import { Button, FormTypewriterEffect } from "@imports/.";
import styles from "./header.module.css";

export default function Header() {
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";

  return (
    <>
      <header className={`${styles.header} header-content`}>
        <div className={styles.overlay}></div>
        <div className={`themeButton ${styles.theme}`}>
          <ThemeButton />
        </div>
        <div className={`${styles.Redbutton} redbutton`}>
          <Link href="/hire-remotely" passHref>
            <a>
              <Button text="Post a job" />
            </a>
          </Link>
        </div>
        <div className="content">
          <div className={`${styles.logo}`}>
            <Logo color="white" />
          </div>
          <div className={`${styles.Searchform} ${cardStyle} Searchform`}>
            <h1>Hire a 🔥 skilled Remote</h1>
            <FormTypewriterEffect /> <h1>Expert</h1>
          </div>
        </div>
      </header>
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
          .themeButton {
            position: fixed;
            left: 20px;
            top: 20px;
            z-index: 10000;
          }
          .content {
            display: flex;
            flex-direction: column;
          }
          .redbutton {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            font-size: 20px;
          }
          .header-content {
            background-image: url("/mainbanner.webp");
            height: 400px;
            background-position: center;
            background-size: 100%;
            position: relative;
            display: flex;
            margin: auto;
            justify-content: center;
            align-items: flex-start;
          }
          .logo h3 {
            font-family: "Pacifico", san-serif, helevetica;
            font-size: 30px;
            line-height: 35px;
            letter-spacing: 5px;
          }
          .logo p {
            font-size: 20px;
          }
          .Searchform {
            display: flex;
            align-items: center;
            font-family: "sans-serif", Arial;
            font-size: 20px;
            margin: auto;
            font-weight: 600;
            justify-content: center;
            background-color: white;
            width: fit-content;
            padding: 10px;
            width: 700px;
          }
          .Searchform h1 {
            font-size: 20px;
            margin: 0px 10px;
          }
          @media (min-width: 1440px) {
            .header-content {
              height: 500px;
            }
          }
          @media (max-width: 480px) {
            .header-content {
              background-size: cover;
            }
            .Searchform h1 {
              font-size: 12px;
            }

            .Searchform {
              width: 350px;
              font-size: 12px;
              position: unset;
            }
          }
        `}
      </style>
    </>
  );
}
