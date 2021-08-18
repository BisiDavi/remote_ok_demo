/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import {
    Layout,
    NavMenu,
    HireInfoCard,
    WorldwideJobForm,
    EmailForm,
} from '@imports/.';

import JobCard from '@components/Cards/JobCard';
import styles from '@styles/indexpage.module.css';
import { showWorldWideJobs } from '@utils/filterJobs';

interface Props {
    data: [];
    availableJobs:[]
}

const Home: NextPage<Props> = ({ availableJobs }): JSX.Element => {
    console.log('availableJobs', availableJobs);

    const [showEmail, setEmail] = useState<boolean>(true);
    const [hidePostJobCard, setHideCard] = useState<boolean>(true);

    showWorldWideJobs(availableJobs)

    const hideCard = () => setHideCard(false);

    const hideEmail = () => setEmail(false);

    const displayJobCards = () => {
        return availableJobs.map((job: any) => (
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
        <Layout pageTitle='Remote Jobs in Programming, Design, Sales and More'>
            <NavMenu />
            <main className='main mt-5'>
                <div className='hire-remote mt-2 mb-3'>
                    <HireInfoCard
                        hidePostJobCard={hidePostJobCard}
                        hideCard={hideCard}
                    />
                </div>
                <div
                    className={`${styles.worldwideText}   justify-content-between mx-auto d-flex w-75`}
                >
                    <h4>Today&#39;s remote jobs</h4>
                    <span className={styles.worldwideform}>
                        <WorldwideJobForm />
                    </span>
                </div>
                <div className='available-jobs'>{displayJobCards()}</div>
            </main>
            <footer className='footer'>
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
                    .footer {
                        position: relative;
                    }
                    @media (max-width: 480px) {
                        .main {
                            padding-top: 10px;
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

export async function getServerSideProps(ctx): Promise<any> {
    const response = await fetch('https://remoteok.io/api');
    let data = await response.json();
    const availableJobs = data.filter(job => job.slug);
    return {
        props: { availableJobs },
    };
}

export default Home;
