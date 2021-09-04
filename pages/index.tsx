import { useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import {
  Layout,
  NavMenu,
  HireInfoCard,
  WorldwideJobForm,
  EmailSubscriberForm,
} from "@imports/.";
import useTheme from "@hooks/useTheme";
import colors from "@utils/colors";
import AvailableJobs, {
  displayJobCards,
} from "@components/Cards/AvailableJobs";
import connectToDatabase from "@middlewares/database";
import Jobs from "@model/jobSchema";

interface Props {
  availableJobs: [];
  jobsFromDb?: string;
}

// {
//   availableJobs,
//   jobsFromDb,
// }: Props

const Home: NextPage<Props> = (): JSX.Element => {
  const { dark } = useTheme();
  const [showEmail, setEmail] = useState<boolean>(true);
  const [hidePostJobCard, setHideCard] = useState<boolean>(true);

  const hideCard = () => setHideCard(false);
  const hideEmail = () => setEmail(false);

  // const postedJobs = JSON.parse(jobsFromDb);

  const themeClass = dark ? "dark" : "light";

  return (
    <Layout pageTitle="Remote Jobs in Programming, Design, Sales and More">
      <NavMenu />
      <main className={`main ${themeClass}`}>
        <div className="content">
          <div className="hire-remote">
            <HireInfoCard
              hidePostJobCard={hidePostJobCard}
              hideCard={hideCard}
            />
          </div>
          <WorldwideJobForm themeClass={themeClass} />
          {/* <AvailableJobs availableJobs={postedJobs} />
          <AvailableJobs availableJobs={availableJobs} /> */}
        </div>
      </main>
      <EmailSubscriberForm showEmail={showEmail} cancelEmail={hideEmail} />
      <style jsx>
        {`
          main.main {
            position: relative;
            top: 80px;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          main .content {
            margin: auto;
            display: flex;
            flex-direction: column;
            width: 65%;
          }

          .light {
            background-color: #f9f9f9;
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
            padding: 15px;
          }
          @media (max-width: 1024px) {
            .hire-remote {
              margin-top: -30px;
              padding-top: 30px;
            }
            main .content {
              width: 95%;
            }
          }
          @media (max-width: 1440px and min-width:1024px) {
            .hire-remote {
              margin-top: -30px;
            }
          }
          @media (max-width: 500px) {
            main.main {
              padding-top: 10px;
              top: 70px;
            }
            .footer {
              position: inherit;
            }
          }
        `}
      </style>
    </Layout>
  );
};

// export async function getServerSideProps(): Promise<any> {
//   let result, jobsFromDb;
//   await connectToDatabase();
//   await Jobs.find().then((job) => {
//     jobsFromDb = JSON.stringify(job);
//   });

//   await axios.get("https://remoteok.io/api").then((response) => {
//     result = response.data;
//   });

//   const availableJobs = result.filter((job) => job.slug);
//   return {
//     props: { availableJobs, jobsFromDb },
//   };
// }

export default Home;
