/* eslint-disable @next/next/no-img-element */
import { RedButton } from "@components/Buttons";
import Logo from "@components/Logo";
import { PropsWithChildren } from "react";
import companyLogos from "@json/remote-companies.json";

export default function HireRemoteLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className="hireRemotely container-fluid">
        <div className="row">
          <header className="header col-12">
            <Logo color="black" />
            <h1>Hire Remotely</h1>
            <RedButton text="Welcome" />
          </header>
          <main className="main row px-0 mx-0 w-100">
            <div className="col-9">{children}</div>
            <aside className="aside col-3 p-4">
              <h3>
                This is a demo project inspired by{" "}
                <a rel="noreferrer" target="_blank" href="https://remoteok.io">
                  Remote OK{" "}
                </a>
                , Thank you <b>Remote OK</b> for making your api opensource. You
                guys are <b>awesome</b>
              </h3>
              <h3>
                Remote OK is{" "}
                <b>the most popular remote jobs board in the world</b> trusted
                by millions of remote workers and leading remote companies like
              </h3>
              <div className="companyLogos mt-5">
                {companyLogos.map((logo, index) => (
                  <img src={`${logo}.webp`} alt={logo} key={index} />
                ))}
              </div>
              <div className="reach-me">
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
          <footer className="col-12">
            <div className="content d-flex col-6 align-items-center">
              <div className="col-3">
                <Logo color="black" />
              </div>
              <div className="company col-3">
                <h3>Company: </h3>
                <h3 className="font-weight-bold">Position:</h3>
                <h4 className="location">
                  <span>Location:</span>
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
          }
          .aside {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #ddd;
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
          }
          .header h1 {
            font-family: "Nunito", sans-serif;
            font-weight: bold;
            font-style: normal;
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
        `}
      </style>
    </>
  );
}
