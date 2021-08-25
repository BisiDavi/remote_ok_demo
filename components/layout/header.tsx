import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "@components/Logo";
import useTheme from "@hooks/useTheme";
import ThemeButton from "@components/Buttons/ThemeButton";
import { RedButton, FormTypewriterEffect } from "@imports/.";
import styles from "./header.module.css";

export default function Header() {
  const { themeStyle } = useTheme();

  return (
    <header className={`${styles.header} header-content`}>
      <Container className="flex-column p-0" fluid>
        <Row className={styles.row1}>
          <Col lg={1} className={styles.theme}>
            <ThemeButton />
          </Col>
          <Col lg={4} className={styles.logo}>
            <Logo />
          </Col>
          <Col
            lg={2}
            className={`${styles.headerButton} mt-5 d-flex justify-content-center`}
          >
            <span className={`${styles.Redbutton} redbutton`}>
              <Link href="/hire-remotely" passHref>
                <a>
                  <RedButton
                    btnClassName="redbutton mx-2 text-white position-fixed btn-danger font-weight-bold"
                    text="Post a job"
                  />
                </a>
              </Link>
            </span>
          </Col>
          <Col className={styles.overlay}></Col>
          <div
            style={themeStyle("card")}
            className={`${styles.Searchform} Searchform`}
          >
            <h1>Hire a 🔥 skilled Remote</h1>
            <FormTypewriterEffect /> <h1>Expert</h1>
          </div>
        </Row>
      </Container>
      <style jsx>
        {`
          .redbutton {
            right: 20px;
            z-index: 10000;
            font-size: 20px;
          }
          .header-content {
            background-image: url("/mainbanner.webp");
            height: 400px;
            background-position: center;
            background-size: 100%;
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
            width: 600px;
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
    </header>
  );
}
