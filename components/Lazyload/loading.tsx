import Logo from "@components/Logo";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <Logo />
        <h3>
          Your Platform to get <b>Remote</b> | Loading ...
        </h3>
      </div>
      <style jsx>
        {`
          .loading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: auto;
            align-items: center;
            width: 100%;
            height: 100vh;
            background-color: black;
            opacity: 0.5;
          }
          .loading h3 {
            color: white;
          }
        `}
      </style>
    </>
  );
}
