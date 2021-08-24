import Link from "next/link";
import styles from "./menu.module.css";

export const NavMenu: React.FC = (): JSX.Element => {
  const menu = [
    { linkName: "REMOTE JOBS", icon: "💼", link: "remote-jobs" },
    {
      linkName: "SOFTWARE DEVELOPMENT",
      icon: "💻",
      link: "software-development",
    },
    { linkName: "CUSTOMER SUPPORT", icon: "🎧", link: "customer-support" },
    { linkName: "MARKETING", icon: "📈", link: "marketing" },
    { linkName: "DESIGN", icon: "🎨", link: "design" },
    { linkName: "NON-TECH", icon: "🔌", link: "non-tech" },
    {
      linkName: "WORKERS DIRECTORY",
      icon: "📖",
      link: "workers-directory",
    },
    {
      linkName: "TOP REMOTE COMPANIES",
      icon: "🏢",
      link: "top-remote-companies",
    },
    {
      linkName: "PAYROLL FOR REMOTE TEAMS",
      icon: "💳",
      link: "payrol-for-remote-teams",
    },
    {
      linkName: "INSURE YOUR REMOTE TEAMS",
      icon: "🔒",
      link: "insure-your-teams",
    },
    { linkName: "FIND YOUR PLACE", icon: "🌍", link: "worldwide" },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-lg-12 app-nav">
            <nav className={`${styles.navbar} nav`}>
              <ul className={`${styles.navlist} d-flex list-unstyled mx-auto`}>
                {menu.map((menuLink) => (
                  <li className="mx-1" key={menuLink.linkName}>
                    <Link href="/#">
                      <a className="menulink text-decoration-none d-flex flex-column text-center text-dark">
                        <span className="menu-icon mx-auto">
                          {menuLink.icon}
                        </span>
                        {menuLink.linkName}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={`${styles.wave} col-lg-12 wave p-0 m-0`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
              <path
                fill="#f9f9f9"
                fillOpacity="1"
                d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .nav {
            margin: auto;
            display: flex;
            position: absolute;
            z-index: 200;
            top: 0px;
          }
          .wave {
            position: absolute;
            z-index: 100;
            height: 10px;
            top: -200px;
          }
          .menu-icon {
            font-size: 20px;
          }
          .menulink {
            font-size: 0.75em;
            font-family: "Nunito", sans-serif;
            width: 100px;
          }
          .app-nav {
            display: flex;
            margin: auto;
            justify-content: center;
          }
          @media (min-width: 1900px) {
            .wave {
              top: -270px;
            }
          }
          @media (max-width: 1440px) {
            .wave {
              top: -180px;
            }
          }
          @media (max-width: 1024px) {
            .nav {
              overflow: scroll;
              width: 100%;
            }
            .wave {
              top: -120px;
            }
          }
          @media (max-width: 768px) {
            .wave {
              top: -80px;
            }
          }
          @media (max-width: 480px) {
            .nav {
              overflow: scroll;
              width: 100%;
              z-index: 500;
              overflow-y: clip;
            }
            .wave {
              top: -50px;
              z-index: 400;
            }
          }
        `}
      </style>
    </div>
  );
};
