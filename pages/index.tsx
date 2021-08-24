/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import {
  Layout,
  NavMenu,
  HireInfoCard,
  WorldwideJobForm,
  EmailForm,
} from "@imports/.";

import JobCard from "@components/Cards/JobCard";
import styles from "@styles/indexpage.module.css";
import { showWorldWideJobs } from "@utils/filterJobs";

interface Props {
  data: [];
  availableJobs: [];
}

const Home: NextPage<Props> = ({ availableJobs }): JSX.Element => {
  console.log("availableJobs", availableJobs);

  const [showEmail, setEmail] = useState<boolean>(true);
  const [hidePostJobCard, setHideCard] = useState<boolean>(true);

  const worldwideJobsState = useSelector((state) => state.jobs);

  const worldwideJobs = showWorldWideJobs(availableJobs);

  const hideCard = () => setHideCard(false);

  const hideEmail = () => setEmail(false);

  const displayJobCards = (jobs) => {
    return jobs.map((job: any) => <JobCard key={job.slug} data={job} />);
  };
  function displayJobs() {
    return worldwideJobsState.worldwide
      ? displayJobCards(worldwideJobs)
      : displayJobCards(availableJobs);
  }

  return (
    <Layout
      className="position-relative"
      pageTitle="Remote Jobs in Programming, Design, Sales and More"
    >
      <NavMenu />
      <main className="main mt-5">
        <div className="hire-remote  mb-3">
          <HireInfoCard hidePostJobCard={hidePostJobCard} hideCard={hideCard} />
        </div>
        <div
          className={`${styles.worldwideText} justify-content-between mx-auto d-flex w-75`}
        >
          <h6 className="font-weight-bold">Remote jobs</h6>
          <span className={styles.worldwideform}>
            <WorldwideJobForm />
          </span>
        </div>
        <div className="available-jobs">{displayJobs()}</div>
      </main>
      <footer className="footer">
        <EmailForm showEmail={showEmail} cancelEmail={hideEmail} />
      </footer>
      <style jsx>
        {`
          .main {
            background-color: #f9f9f9;
            z-index: 1000;
            position: relative;
            top: 80px;
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
          @media (max-width: 1440px) {
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
