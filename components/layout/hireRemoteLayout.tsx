/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Button from "@components/Buttons";
import Logo from "@components/Logo";
import useTheme from "@hooks/useTheme";
import ThemeButton from "@components/Buttons/ThemeButton";
import styles from "./hireRemotelayout.module.css";
import colors from "@utils/colors";

const PreviewCard = dynamic(() => import("../Cards/PreviewCard"));

export default function HireRemoteLayout({ children }: PropsWithChildren<{}>) {
  const { jobDetails } = useSelector((state) => state.postJob);
  const { dark } = useTheme();
  const cardStyle = dark ? "dark" : "light";

  const themeState = dark ? "#fff" : "black";

  return (
    <>
      <Head>
        <title>Post Job | Remote demo®</title>
      </Head>
      <div className="hireRemotely container-fluid">
        <div className="row hire-now">
          <header className={`${styles.header} header ${cardStyle}`}>
            <Logo color={themeState} />
            <h1>🏢 🚀 Hire Remotely</h1>
            <Button text="Welcome" />
            <div className="theme-button">
              <ThemeButton />
            </div>
          </header>
          <main className="main">
            <div className={`content ${cardStyle}`}>{children}</div>
            <aside className={`aside ${cardStyle}`}>
              <h3>
                This is a demo project inspired by{" "}
                <a rel="noreferrer" target="_blank" href="https://remoteok.io">
                  Remote OK{" "}
                </a>
                , Thank you <b>Remote OK</b> for making your api opensource. You
                guys are <b>awesome</b>
              </h3>
              <b className="vistLink">
                If you want to post a job, visit,{" "}
                <a rel="noreferrer" target="_blank" href="https://remoteok.io">
                  Remote OK{" "}
                </a>
              </b>
              <h3>
                Remote OK is{" "}
                <b>the most popular remote jobs board in the world</b> trusted
                by millions of remote workers and leading remote companies like
              </h3>
              <div className="reach-me">
                <h6>Reach me via:</h6>
                <div className="links">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://olubisi-david.vercel.app"
                  >
                    🌍 Porfolio
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/BisiDavi"
                  >
                    <img src="/github.svg" alt="github" /> Github
                  </a>
                </div>
              </div>
              <div className="post-job">
                <button>Post your demo job - Free</button>
                <p>Any posted job, shows only on this platform.</p>
              </div>
            </aside>
          </main>
          <footer className={`footer ${cardStyle}`}>
            <div className="post-job mobile-only">
              <button>Post your demo job - Free</button>
              <p className="mb-0">
                Any posted job, shows only on this platform.
              </p>
            </div>
            <PreviewCard dark={dark} data={jobDetails} />
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .hireRemotely {
            display: flex;
            flex-direction: column;
          }
          .header.light,
          .aside.light,
          .footer.light,
          .content.light {
            background-color: ${colors.white};
            color: ${colors.black};
          }
          .header.dark,
          .aside.dark,
          .footer.dark,
          .content.dark {
            color: ${colors.white};
            background-color: ${colors.brownish};
          }
          main.main {
            display: flex;
            width: 100%;
            position: relative;
            top: 70px;
            background-color: #f9f9f9;
          }
          .main .content {
            width: 72%;
            margin-bottom: 140px;
          }
          .aside {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #ddd;
            position: fixed;
            right: 0;
            top: 60px;
            width: 28%;
            height: 100%;
            padding: 10px 20px;
            background-color: white;
            z-index: 1;
          }
          .reach-me {
            display: flex;
            align-items: center;
          }
          .reach-me h6 {
            font-size: 20px;
            font-family: "Nunito";
            margin: 0px;
          }
          .aside h3 {
            font-size: 20px;
            font-family: "Nunito";
            letter-spacing: 1px;
            line-height: 25px;
          }
          .aside h3 a {
            font-weight: bold;
          }
          .yellow.content {
            background-color: #fff9c9;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 50px;
            border-bottom: 1px solid #ddd;
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 3;
            background-color: white;
          }
          .header h1 {
            font-family: "Nunito", sans-serif;
            font-weight: bold;
            font-style: normal;
            font-size: 28px;
          }
          .companyLogos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 20px;
            margin: 15px 0px;
          }
          .companyLogos img {
            width: 100%;
            max-height: 50px;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            margin: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            opacity: 1;
            vertical-align: middle;
          }
          .reach-me {
            margin: 15px 0px;
          }
          .links a {
            margin: 0px 10px;
          }
          .post-job button {
            width: 100%;
            background-color: #ff4742;
            border: none;
            color: white;
            height: 60px;
            font-size: 24px;
            font-weight: bold;
            border-radius: 5px;
            margin: 20px 0px;
          }
          .footer {
            border-top: 1px solid #ddd;
            position: fixed;
            bottom: 0;
            background-color: white;
            width: 75%;
          }

          .vistLink {
            margin-bottom: 10px;
          }
          footer .post-job {
            display: none;
          }
          @media (max-width: 1024px) {
            .companyLogos {
              grid-gap: 5px;
            }
            .aside h3 {
              font-size: 15px;
              letter-spacing: normal;
              line-height: 18px;
            }
            aside.aside button {
              font-size: 14px;
            }
          }
          @media (max-width: 768px) {
            .row.hire-now {
              flex-direction: column;
            }
            header.header a {
              height: 60px;
            }
            header.header h1 {
              font-size: 16px;
              margin-bottom: 0px;
            }
            header.header {
              align-items: center;
              height: 70px;
              padding: 10px 20px;
            }
            header button {
              display: none;
            }
            main.main {
              flex-direction: column;
            }
            aside.aside {
              position: unset;
            }
            aside.aside h3 {
              font-size: 16px;
              line-height: 20px;
              letter-spacing: normal;
            }
            .companyLogos {
              grid-gap: 5px;
            }
            footer .post-job {
              display: flex;
              flex-direction: column;
              text-align: center;
            }
          }
          @media (max-width: 500px) {
            header h1 {
              display: none;
            }
            footer {
              height: 250px;
              overflow-y: scroll;
              z-index: 100;
            }
            .post-job button {
              height: 40px;
              font-size: 20px;
              width: 80%;
              margin: 10px auto 20px auto;
            }
          }
        `}
      </style>
    </>
  );
}
