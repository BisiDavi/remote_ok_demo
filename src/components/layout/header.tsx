import { Container, Row, Col } from "react-bootstrap";
import { WhiteButton, GreenButton, RedButton, SearchForm } from "../../imports";
import styles from './header.module.css'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={`${styles.header} header-content`}>
      <Container fluid>
        <Row className={styles.row1}>
          <Col lg={4} xs={2} className={`${styles.feed} mt-2 d-flex h-25`}>
            {/* <WhiteButton btnClassName="mx-1" text="RSS" />
            <WhiteButton btnClassName="mx-1" text="API" /> */}
          </Col>
          <Col lg={4} className={styles.logo}>
            <div className={`${styles.logoText} logo mt-5 mb-5 flex-column d-flex mx-auto justify-content-center`}>
              <span className="d-flex  mx-auto">
                <h3 className="text-white  font-weight-bold">remote</h3>
                <span className="divider bg-white  text-white mx-2"> | </span>
                <h3 className="text-white font-weight-bold">demo®</h3>
              </span>
              <p className="motto text-white text-center font-weight-bold">
                work anywhere, live everywhere
              </p>
            </div>
          </Col>
          <Col lg={2} className={`${styles.headerButton} mt-5 d-flex justify-content-center`}>          
            <span className={`${styles.Redbutton} redbutton`}>
              <RedButton
                btnClassName="redbutton mx-2 text-white position-fixed btn-danger font-weight-bold"
                text="Post a job"
              />
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
            font-size:20px;
          }
          .header-content {
            background-image: url("/mainbanner.webp");
            height: 400px;
            background-position: center;
            background-size: 100%;
          }
          .logo h3 {
            font-family: "Pacifico", san-serif, helevetica;
            font-size:30px;
            line-height:35px;
            letter-spacing:5px;
          }
          .logo p{
            font-size:20px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
