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
            width: 100px;
          }
          .logo-text h3,
          .logo p {
            margin: 0px;
          }
          .motto: {
            color: ${color};
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
          }
        `}
      </style>
    </>
  );
}

interface LogoProps {
  color?: string;
}
