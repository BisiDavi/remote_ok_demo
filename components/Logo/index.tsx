export default function Logo({ color = "white" }: LogoProps) {
  return (
    <>
      <div className="logo mt-3 mb-3 flex-column d-flex">
        <span className="d-flex align-items-center">
          <h3 className="font-weight-bold mb-0">remote</h3>
          <span className="divider mx-2"> | </span>
          <h3 className="font-weight-bold mb-0">demo®</h3>
        </span>
        {color === "white" && (
          <p className="motto text-white text-center font-weight-bold">
            work anywhere, live everywhere
          </p>
        )}
      </div>
      <style jsx>
        {`
          .logo h3,
          .divider {
            font-family: "Pacifico", san-serif, helevetica;
            color: ${color};
          }
          .divider {
            color: ${color};
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
