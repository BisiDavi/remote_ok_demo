import { useState, useEffect } from "react";
import { NextPage, GetStaticProps } from "next";
import { Layout, NavMenu, HireInfoCard, WorldwideJobForm } from "../imports";
import JobCard from "../components/Cards/JobCard";
import { LazyloadCard } from "../components/Lazyload";

interface Props {
  data: [];
}

const Home: NextPage<Props> = ({ data }): JSX.Element => {
  useEffect(() => {
    passData();
  }, []);
  const [jobData, setJobData] = useState([]);

  const passData = () => {
    const jobs = data.slice(1, 100);
    setJobData([...jobs]);
    return jobData;
  };

  const displayJobCards = () => {
    return jobData.map((job: any) => (
      <JobCard
        key={job.slug}
        slug={job.slug}
        cardImg={job.logo}
        imgAlt={job.company}
        companyName={job.company}
        jobRole={job.position}
        location={job.location}
        tags={job.tags}
        duration={job.date}
      />
    ));
  };

  return (
    <Layout pageTitle="Remote Jobs in Programming, Design, Sales and More">
      <NavMenu />
      <main className="main mt-5">
        <div className="hire-remote mt-2 mb-3">
          <HireInfoCard />
        </div>

        <div className="justify-content-between mx-auto d-flex w-100">
          <h4>Today's remote jobs</h4>
          <WorldwideJobForm />
        </div>
        <div className="available-jobs">
          {displayJobCards()}
        </div>
      </main>
      <style jsx>
        {`
          .main {
            background-color: #f9f9f9;
          }
        `}
      </style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx): Promise<any> => {
  const response = await fetch("https://remoteok.io/api");
  let data = await response.json();
  return {
    props: { data }
  };
};

export default Home;