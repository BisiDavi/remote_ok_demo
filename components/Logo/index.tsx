import Link from "next/link";

export default function Logo({ color = "white" }: LogoProps) {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <div className="logo">
            <span className="logo-text">
              <h3>remote</h3>
              <span className="divider"> | </span>
              <h3>demo®</h3>
            </span>
            {color === "white" && (
              <p className="motto">work anywhere, live everywhere</p>
            )}
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .logo h3,
          .divider {
            font-family: "Pacifico", san-serif, helevetica;
            color: ${color};
            font-weight: 500;
          }
          .logo-text {
            display: flex;
            align-items: center;
            width: auto;
          }
          .logo-text h3,
          .logo p {
            margin: 0px;
          }
          .logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: auto;
            justify-content: center;
            font-family: "Pacifico", san-serif, helevetica;
          }
          .motto {
            color: white;
            font-size: 30px;
          }
          .divider {
            color: ${color};
          }
          a,
          a:hover,
          a:focus {
            text-decoration: none;
          }
          @media (max-width: 480px) {
            .logo {
              position: absolute;
              z-index: 400;
            }
            .logo-text h3 {
              font-size: 25px;
              line-height: 30px;
            }
            .logo p.motto {
              line-height: 30px;
              font-size: 20px;
            }
            .logo {
              height: 0px;
              margin: 0px;
              line-height: 30px;
            }
          }
        `}
      </style>
    </>
  );
}

interface LogoProps {
  color?: string;
}
