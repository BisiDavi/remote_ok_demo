import Link from "next/link";
import useTheme from "@hooks/useTheme";
import colors from "@utils/colors";
import menu from "@json/menu.json";
import styles from "./menu.module.css";

export function NavMenu(): JSX.Element {
  const { dark } = useTheme();

  const waveStyle = dark ? colors.grayish : colors.light;
  const menuStyle = dark ? "menu-dark" : "menu-light";

  return (
    <>
      <div className="nav-menu">
        <nav className={styles.navbar}>
          <ul className={styles.navlist}>
            {menu.map((menuLink) => (
              <li key={menuLink.linkName}>
                <Link href="/#" passHref>
                  <a className={menuStyle}>
                    <span className="menu-icon">{menuLink.icon}</span>
                    {menuLink.linkName}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${styles.wave} wave`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path
              fill={waveStyle}
              fillOpacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .nav-menu {
            position: relative;
            display: flex;
            align-items: center;
            margin: auto;
          }
          .menu-light: {
            color: ${colors.black};
          }

          nav ul {
            padding: 0px;
            display: flex;
            align-items: center;
            margin: auto;
          }

          nav ul li {
            list-style: none;
            margin: 0px 10px;
          }

          nav ul li a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            text-align: center;
            font-weight: bold;
            font-size: 0.75em;
            font-family: "Nunito", sans-serif;
            width: 100px;
          }

          .menu-dark: {
            color: ${colors.white};
          }
          .nav-menu nav {
            margin: auto;
            display: flex;
            position: absolute;
            z-index: 200;
            justify-content: center;
            align-items: center;
            top: 0px;
          }
          .wave {
            position: absolute;
            z-index: 100;
            width: 100%;
            height: 10px;
            top: -200px;
          }
          .menu-icon {
            font-size: 20px;
            margin: auto;
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
            nav {
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
            nav {
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
    </>
  );
}
