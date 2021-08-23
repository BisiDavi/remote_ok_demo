/* eslint-disable @next/next/no-img-element */
import { RedButton } from "@components/Buttons";
import Logo from "@components/Logo";
import { PropsWithChildren } from "react";
import companyLogos from "@json/remote-companies.json";

export default function HireRemoteLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="hireRemotely">
      <header>
        <Logo color="black" />
        <h1>Hire Remotely</h1>
        <RedButton text="Welcome" />
      </header>
      {children}
      <aside>
        <h3>
          This is a demo project inspired by{" "}
          <a href="https://remoteok.io">Remote OK </a>, Thank you{" "}
          <b>Remote OK</b> for making your api opensource. You guys are{" "}
          <b>awesome</b>
        </h3>
        <h5>
          Remote OK is <b>the most popular remote jobs board in the world</b>{" "}
          trusted by millions of remote workers and leading remote companies
          like
        </h5>
        <div className="company-logos">
          {companyLogos.map((logo, index) => (
            <img src={`${logo}.webp`} alt={logo} key={index} />
          ))}
        </div>
        <div className="reach-me">
          <h6>Reach me via:</h6>
          <div className="links">
            <a>Porfolio</a>
            <a href="#github">Github</a>
            <a href="#linkedin">Linked in</a>
            <a href="#instagram"            >Instagram</a>
          </div>
        </div>
        <div className="post-job">
            <button>Post your job - Free</button>
            <p>Any posted job, shows only on this platform.</p>
        </div>
      </aside>
      <footer></footer>
    </div>
  );
}
