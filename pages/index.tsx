/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic"
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Layout,
  NavMenu,
  HireInfoCard,
  WorldwideJobForm,
  EmailSubscriberForm,
} from "@imports/.";
import useTheme from "@hooks/useTheme";
import JobCard from "@components/Cards/JobCard";
import { showWorldWideJobs } from "@utils/filterJobs";
import colors from "@utils/colors";

interface Props {
  data: [];
  availableJobs: [];
}

const DynamicJobCard = dynamic(() => import("../components/Cards/JobCard"))

const Home: NextPage<Props> = ({ availableJobs }): JSX.Element => {
  const { dark } = useTheme();

  console.log("availableJobs", availableJobs);

  const [showEmail, setEmail] = useState<boolean>(true);
  const [hidePostJobCard, setHideCard] = useState<boolean>(true);

  const worldwideJobsState = useSelector((state) => state.jobs);

  const worldwideJobs = showWorldWideJobs(availableJobs);

  const hideCard = () => setHideCard(false);

  const hideEmail = () => setEmail(false);

  const displayJobCards = (jobs) => {
    return jobs.map((job: any) => <DynamicJobCard key={job.slug} data={job} />);
  };
  function displayJobs() {
    return worldwideJobsState.worldwide
      ? displayJobCards(worldwideJobs)
      : displayJobCards(availableJobs);
  }

  const themeClass = dark ? "dark" : "light";

  return (
    <Layout
      className="position-relative"
      pageTitle="Remote Jobs in Programming, Design, Sales and More"
    >
      <NavMenu />
      <main className={`main ${themeClass} mt-lg-5`}>
        <div className="hire-remote  mb-3 pt-3">
          <HireInfoCard hidePostJobCard={hidePostJobCard} hideCard={hideCard} />
        </div>
        <div className="justify-content-between container mx-auto d-flex">
          <h6 className="font-weight-bold">Remote jobs</h6>
          <span>
            <WorldwideJobForm />
          </span>
        </div>
        <div className="available-jobs">{displayJobs()}</div>
      </main>
      <EmailSubscriberForm showEmail={showEmail} cancelEmail={hideEmail} />
      <style jsx>
        {`
          .main {
            z-index: 1000;
            position: relative;
            top: 80px;
          }
          .light {
            background-color: #f9f9f9;
          }
          .available-jobs {
            padding-bottom: 7%;
          }
          .dark {
            background-color: ${colors.grayish};
          }
          footer.footer {
            position: absolute;
            bottom: 0px;
            left: 0px;
            height: 70px;
            width: 100%;
          }
          .hire-remote {
            margin-top: 16px;
          }
          @media (max-width: 480px) {
            .main {
              padding-top: 10px;
            }
            .footer {
              position: inherit;
            }
          }
          @media (max-width: 1024px) {
            .hire-remote {
              margin-top: -60px;
              padding-top: 30px;
            }
          }
          @media (max-width: 1440px and min-width:1024px) {
            .hire-remote {
              margin-top: -30px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export async function getServerSideProps(): Promise<any> {
  let result;
  await axios.get("https://remoteok.io/api").then((response) => {
    result = response.data;
  });
  const availableJobs = result.filter((job) => job.slug);
  return {
    props: { availableJobs },
  };
}

export default Home;
