import { Container, Row, Col } from "react-bootstrap";
// import styled from "styled-components";
import { WhiteButton, GreenButton, RedButton, SearchForm } from "../../imports";

/* const AppHeader = styled.header`
  background-image: url("/mainbanner.webp");
  height: 300px !important;
  background-position: center;
  background-size: 100%;
`;

const Logo = styled.h3`
  font-family: "Pacifico", san-serif, helevetica;
`;
 */
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header-content">
      <Container fluid>
        <Row className="row">
          <Col lg={2} xs={2}>
            <WhiteButton text="RSS" />
            <WhiteButton text="API" />
          </Col>
          <Col lg={6}>
            <div className="logo mt-2 mb-5 flex-column d-flex mx-auto justify-content-center">
              <span className="d-flex  mx-auto">
                <h3 className="text-white">remote</h3>
                <span className="divider bg-white">|</span>
                <h3 className="text-white">demo®</h3>
              </span>
              <p className="motto text-white">work anywhere, live everywhere</p>
            </div>
            <div className="searchform">
              <SearchForm />
            </div>
          </Col>
          <Col lg={4} className="justify-content-around">
            <GreenButton text="Remote Health" />
            <RedButton text="Post a job" />
          </Col>
        </Row>
        {/* <Row>
          <Col lg={12} className="wave p-0 m-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f9f9f9"
                fillOpacity="1"
                d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </Col>
        </Row> */}
      </Container>
      <style jsx>
        {`
          .header-content {
            background-image: url("/mainbanner.webp");
            height: 300px !important;
            background-position: center;
            background-size: 100%;
          }
          .logo h3 {
            font-family: "Pacifico", san-serif, helevetica;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
