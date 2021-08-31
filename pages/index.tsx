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
import AvailableJobs from "@components/Cards/AvailableJobs";

interface Props {
  availableJobs: [];
}

const Home: NextPage<Props> = ({ availableJobs }: Props): JSX.Element => {
  const { dark } = useTheme();
  const [showEmail, setEmail] = useState<boolean>(true);
  const [hidePostJobCard, setHideCard] = useState<boolean>(true);

  const hideCard = () => setHideCard(false);
  const hideEmail = () => setEmail(false);

  const themeClass = dark ? "dark" : "light";

  return (
    <Layout
      className="position-relative"
      pageTitle="Remote Jobs in Programming, Design, Sales and More"
    >
      <NavMenu />
      <main className={`main ${themeClass}`}>
        <div className="content">
          <div className="hire-remote">
            <HireInfoCard
              hidePostJobCard={hidePostJobCard}
              hideCard={hideCard}
            />
          </div>
          <WorldwideJobForm />
          <AvailableJobs availableJobs={availableJobs} />
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
