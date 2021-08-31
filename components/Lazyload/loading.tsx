import Head from "next/head";
import Logo from "@components/Logo";
import styles from "./loading.module.css";
import Spinner from "./Spinner";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading ... | Remote demo </title>
      </Head>
      <Spinner />
      <div className={`${styles.loading} loading`}>
        <Logo />
        <h3>
          Your Platform to get <b>Remote Jobs </b> | Loading ...
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
            margin: auto;
            background-color: rgb(74 70 70 / 77%);
            z-index: 100000;
            position: fixed;
            top: 0;
            left: 0;
          }
          .loading h3 {
            color: white;
          }

          @media (max-width: 768px) {
            .loading h3 {
              display: flex;
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
}
