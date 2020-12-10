import { Container, Row, Col } from "react-bootstrap";
import { WhiteButton, GreenButton, RedButton, SearchForm } from "../../imports";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header-content">
      <Container fluid>
        <Row className="row">
          <Col lg={4} xs={2} className="mt-2 d-flex h-25">
            <WhiteButton btnClassName="mx-1" text="RSS" />
            <WhiteButton btnClassName="mx-1" text="API" />
          </Col>
          <Col lg={4}>
            <div className="logo mt-5 mb-5 flex-column d-flex mx-auto justify-content-center">
              <span className="d-flex  mx-auto">
                <h3 className="text-white">remote</h3>
                <span className="divider bg-white  text-white mx-2"> | </span>
                <h3 className="text-white">demo®</h3>
              </span>
              <p className="motto text-white text-center">
                work anywhere, live everywhere
              </p>
            </div>
          </Col>
          <Col lg={4} className="mt-5 d-flex justify-content-center h-25">
            <GreenButton
              btnClassName="mx-2 mr-3 text-white"
              text="Remote Health"
            />
            <span className="redbutton">
              <RedButton
                btnClassName="redbutton mx-2 position-fixed"
                text="Post a job"
              />
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="Searchform">
              <SearchForm />
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .redbutton {
            right: 20px;
            z-index: 1000 !important;
          }
          .header-content {
            background-image: url("/mainbanner.webp");
            height: 400px !important;
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
