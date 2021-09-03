import { useSelector } from "react-redux";
import JobCard from "@components/Cards/JobCard";
import { showWorldWideJobs } from "@utils/filterJobs";

export default function AvailableJobs({ availableJobs }) {
  const worldwideJobsState = useSelector((state) => state.jobs);

  const worldwideJobs = showWorldWideJobs(availableJobs);

  const displayJobCards = (jobs) => {
    return jobs.map((job: any) => <JobCard key={job.slug} data={job} />);
  };
  function displayJobs() {
    return worldwideJobsState.worldwide
      ? displayJobCards(worldwideJobs)
      : displayJobCards(availableJobs);
  }
  return (
    <>
      <div className="available-jobs">
        {(availableJobs || worldwideJobs) && displayJobs()}
      </div>
      <style jsx>
        {`
          .available-jobs {
            padding-bottom: 7%;
          }
        `}
      </style>
    </>
  );
}
