import Link from "next/link";
import {Container, Row, Col} from 'react-bootstrap'
import styled from "styled-components";

const Navbar = styled.nav`
  margin: auto;
  display: flex;
`;

export const NavMenu: React.FC = (): JSX.Element => {
  const menu = [
    { linkName: "REMOTE JOBS", icon: "💼", link: "" },
    { linkName: "SOFTWARE DEVELOPMENT", icon: "💻", link: "" },
    { linkName: "CUSTOMER SUPPORT", icon: "🎧", link: "" },
    { linkName: "MARKETING", icon: "📈", link: "" },
    { linkName: "DESIGN", icon: "🎨", link: "" },
    { linkName: "NON-TECH", icon: "🔌", link: "" },
    { linkName: "WORKERS DIRECTORY", icon: "📖", link: "" },
    { linkName: "TOP REMOTE COMPANIES", icon: "🏢", link: "" },
    { linkName: "PAYROLL FOR REMOTE TEAMS", icon: "💳", link: "" },
    { linkName: "INSURE YOUR REMOTE TEAMS", icon: "🔒", link: "" },
    { linkName: "FIND YOUR PLACE", icon: "🌍", link: "" }
  ];

  return (
    <Navbar className="menu">
      <Container>
        <Row>
          <ul className="d-flex list-unstyled mx-auto">
        {menu.map(menuLink => (
          <li className="mx-1">
            <Link href="">
              <a className="menulink text-decoration-none d-flex flex-column text-center text-dark">
                <span className="mx-auto">{menuLink.icon}</span>
                {menuLink.linkName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
        </Row>
        <Row>
          <Col lg={12} className="wave p-0 m-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f9f9f9"
                fillOpacity="1"
                d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </Col>
        </Row>
      </Container>
      
      
      <style jsx>
        {`
          .menulink {
            font-size: 0.75em;
            font-family: "Nunito", sans-serif;
            width: 100px;
          }
        `}
      </style>
    </Navbar>
  );
};
