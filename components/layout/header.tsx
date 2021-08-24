import Link from "next/link";
import Logo from "@components/Logo";
import { Container, Row, Col } from "react-bootstrap";
import { RedButton, SearchForm } from "../../imports";
import styles from "./header.module.css";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={`${styles.header} header-content`}>
      <Container fluid>
        <Row className={styles.row1}>
          <Col className={styles.logo}>
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
        </Row>
        <Row>
          <Col lg={12} className={styles.form}>
            <div className={`${styles.Searchform} Searchform`}>
              <SearchForm />
            </div>
          </Col>
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
          @media (min-width: 1440px) {
            .header-content {
              height: 500px;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
