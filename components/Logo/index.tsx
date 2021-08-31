import Link from "next/link";

export default function Logo({ color = "white" }: LogoProps) {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <div className="logo mt-3 mb-3 flex-col flex">
            <span className="logo-text">
              <h3 className="mb-0">remote</h3>
              <span className="divider mx-2"> | </span>
              <h3 className="mb-0">demo®</h3>
            </span>
            {color === "white" && (
              <p className="motto text-white text-center font-weight-bold">
                work anywhere, live everywhere
              </p>
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
