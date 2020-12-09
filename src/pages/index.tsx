import { NextPage, GetStaticProps } from "next";
import {
  Layout,
  NavMenu,
  HireInfoCard,
  WorldwideJobForm,
  JobCard
} from "../imports";

interface Props {
  data: [];
}

const Home: NextPage<Props> = ({ data }): JSX.Element => {
  const tenJobArray = data.slice(1, 11);
  
  const displayAvailableJobs = (): any => {
    return tenJobArray.map((job: any) => (
      <JobCard
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

        <div className="justify-content-between mx-auto d-flex w-75">
          <h4>Today's remote jobs</h4>
          <WorldwideJobForm />
        </div>
        <div className="available-jobs">{displayAvailableJobs()}</div>
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
