export default function Logo({ color = "white" }: LogoProps) {
  return (
    <>
      <div className="logo mt-5 mb-5 flex-column d-flex mx-auto justify-content-center">
        <span className="d-flex  mx-auto">
          <h3 className="font-weight-bold">remote</h3>
          <span className="divider bg-white  text-white mx-2"> | </span>
          <h3 className="font-weight-bold">demo®</h3>
        </span>
        {color === "white" && (
          <p className="motto text-white text-center font-weight-bold">
            work anywhere, live everywhere
          </p>
        )}
      </div>
      <style jsx>
        {`
          .logo h3 {
            font-family: "Pacifico", san-serif, helevetica;
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
