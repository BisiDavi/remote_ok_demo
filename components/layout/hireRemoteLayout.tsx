/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RedButton } from "@components/Buttons";
import Logo from "@components/Logo";
import companyLogos from "@json/remote-companies.json";
import styles from "./hireRemotelayout.module.css";

export default function HireRemoteLayout({ children }: PropsWithChildren<{}>) {
  const { jobDetails } = useSelector((state) => state.postJob);
  return (
    <>
      <div className="hireRemotely container-fluid">
        <div className="row hire-now">
          <header className={`${styles.header} header col-12`}>
            <Logo color="black" />
            <h1>🏢 🚀 Hire Remotely</h1>
            <RedButton text="Welcome" />
          </header>
          <main className="main row px-0 mx-0 w-100">
            <div className="col-lg-9 col-12">{children}</div>
            <aside className="aside col-lg-3 col-12 p-4">
              <h3>
                This is a demo project inspired by{" "}
                <a
                  rel="noreferrer"
                  className="font-weight-bold"
                  target="_blank"
                  href="https://remoteok.io"
                >
                  Remote OK{" "}
                </a>
                , Thank you <b>Remote OK</b> for making your api opensource. You
                guys are <b>awesome</b>
              </h3>
              <b className="mb-2">
                If you want to post a job, visit,{" "}
                <a
                  rel="noreferrer"
                  className="font-weight-bold"
                  target="_blank"
                  href="https://remoteok.io"
                >
                  Remote OK{" "}
                </a>
              </b>
              <h3>
                Remote OK is{" "}
                <b>the most popular remote jobs board in the world</b> trusted
                by millions of remote workers and leading remote companies like
              </h3>
              <div className="companyLogos my-3">
                {companyLogos.map((logo, index) => (
                  <img src={`${logo}.webp`} alt={logo} key={index} />
                ))}
              </div>
              <div className="reach-me my-3">
                <h6>Reach me via:</h6>
                <div className="links">
                  <a>🌍 Porfolio</a>
                  <a href="#github">Github</a>
                  <a href="#linkedin">Linked in</a>
                  <a href="#instagram">Instagram</a>
                </div>
              </div>
              <div className="post-job">
                <button>Post your demo job - Free</button>
                <p>Any posted job, shows only on this platform.</p>
              </div>
            </aside>
          </main>
          <footer className="col-12 p-3">
            <div className="content d-flex col-12 align-items-center">
              <div className="col-2">
                <Logo color="black" />
              </div>
              <div className="company col-10">
                <h3>
                  {jobDetails?.company.length > 0
                    ? jobDetails?.company
                    : "Company"}
                </h3>
                <h3 className="font-weight-bold">
                  {jobDetails?.position.length > 0
                    ? jobDetails?.position
                    : "Position"}
                </h3>
                <h4 className="location">
                  <span>
                    {" "}
                    {jobDetails?.location.length > 0
                      ? jobDetails?.location
                      : "Location"}
                  </span>
                </h4>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .hireRemotely {
            display: flex;
            flex-direction: column;
          }
          main.main {
            display: flex;
            width: 100%;
            position: relative;
            top: 70px;
            background-color: #f9f9f9;
          }
          .main .col-9 {
            margin-bottom: 140px;
          }
          .aside {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #ddd;
            position: fixed;
            right: 0;
            top: 70px;
            background-color: white;
            z-index: 1;
          }
          .aside h3 {
            font-size: 20px;
            font-family: "Nunito";
            letter-spacing: 1px;
            line-height: 25px;
          }
          header.header {
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
            grid-template-columns: repeat(3, 120px);
            grid-gap: 20px;
          }
          .companyLogos img {
            width: 120px;
            max-height: 50px;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            margin: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            opacity: 1;
            vertical-align: middle;
          }
          .links a {
            margin: 0px 10px;
          }
          .company h3 {
            font-size: 20px;
          }
          .company h4 {
            font-size: 20px;
          }
          .company .location span {
            background-color: #ddd;
            border-radius: 5px;
            color: white;
            padding: 5px;
            font-size: 16px;
            font-weight: 600;
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
          footer {
            border-top: 1px solid #ddd;
            position: fixed;
            bottom: 0;
            background-color: white;
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
            .companyLogos img {
              width: 100px;
            }
          }
        `}
      </style>
    </>
  );
}
