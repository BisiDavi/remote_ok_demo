import Head from "next/head";
import Logo from "@components/Logo";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading ...</title>
      </Head>
      <div className="loading">
        <Logo />
        <h3>
          Your Platform to get <b>Remote | Loading ... </b>
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
            height: 100%;
            background-color: rgb(158 60 60 / 77%);
            z-index: 100000;
            position: fixed;
            top: 0;
            left: 0;
          }
          .loading h3 {
            color: white;
          }
        `}
      </style>
    </>
  );
}
