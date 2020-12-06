import { Container, Row, Col } from "react-bootstrap";
import { WhiteButton, GreenButton, RedButton, SearchForm } from "../../imports";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header-content">
      <Container fluid>
        <Row className="row">
          <Col
            lg={2}
            xs={2}
            className="mt-2 d-flex"
          >
            <WhiteButton btnClassName="mx-1" text="RSS" />
            <WhiteButton btnClassName="mx-1" text="API" />
          </Col>
          <Col lg={6}>
            <div className="logo mt-2 mb-5 flex-column d-flex mx-auto justify-content-center">
              <span className="d-flex  mx-auto">
                <h3 className="text-white">remote</h3>
                <span className="divider bg-white">|</span>
                <h3 className="text-white">demo®</h3>
              </span>
              <p className="motto text-white text-center">
                work anywhere, live everywhere
              </p>
            </div>
            <div className="searchform">
              <SearchForm />
            </div>
          </Col>
          <Col lg={4} className="mt-2 d-flex ">
            <GreenButton btnClassName="mx-2" text="Remote Health" />
            <RedButton btnClassName="mx-2" text="Post a job" />
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
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
