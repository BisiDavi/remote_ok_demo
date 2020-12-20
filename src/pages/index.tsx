import { useState, useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
import {
  Layout,
  NavMenu,
  HireInfoCard,
  WorldwideJobForm,
  EmailForm
} from '../imports';
import JobCard from '../components/Cards/JobCard';
import styles from '../styles/indexpage.module.css';

interface Props {
  data: [];
}

const Home: NextPage<Props> = ({ data }): JSX.Element => {
  useEffect(() => {
    passData();
  }, []);

  const [jobData, setJobData] = useState([]);
  const [showEmail, setEmail] = useState<boolean>(true);
  const [hidePostJobCard, setHideCard] = useState<boolean>(true);
  console.log('jobData', jobData);
  const passData = () => {
    const jobs = data.slice(1, 100);
    setJobData([...jobs]);
    return jobData;
  };

  const hideCard = () => setHideCard(false);

  const hideEmail = () => setEmail(false);

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
          <HireInfoCard hidePostJobCard={hidePostJobCard} hideCard={hideCard} />
        </div>

        <div
          className={`${styles.worldwideText}   justify-content-between mx-auto d-flex w-75`}
        >
          <h4>Today's remote jobs</h4>
          <span className={styles.worldwideform}>
            <WorldwideJobForm />
          </span>
        </div>
        <div className="available-jobs">{displayJobCards()}</div>
      </main>
      <footer className="footer">
        <EmailForm showEmail={showEmail} cancelEmail={hideEmail} />
      </footer>
      <style jsx>
        {`
          .main {
            background-color: #f9f9f9;
          }
          .footer {
            position: relative;
          }
          @media (max-width: 480px) {
            .footer {
              position: inherit !important;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx): Promise<any> => {
  const response = await fetch('https://remoteok.io/api');
  let data = await response.json();
  return {
    props: { data }
  };
};

export default Home;
