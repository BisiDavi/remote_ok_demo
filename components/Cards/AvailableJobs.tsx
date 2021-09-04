import { useSelector } from "react-redux";
import JobCard from "@components/Cards/JobCard";
import { showWorldWideJobs } from "@utils/filterJobs";

export const displayJobCards = (jobs, demo: boolean) => {
  return jobs.map((job: any) => (
    <JobCard key={job.slug} data={job} demo={demo} />
  ));
};

export default function AvailableJobs({
  availableJobs,
  demo,
}: AvailableJobsProps) {
  const worldwideJobsState = useSelector((state) => state.jobs);

  const worldwideJobs = showWorldWideJobs(availableJobs);

  function displayJobs() {
    return worldwideJobsState.worldwide
      ? displayJobCards(worldwideJobs, demo)
      : displayJobCards(availableJobs, demo);
  }
  return (
    <>
      <div className="available-jobs">
        {(availableJobs || worldwideJobs) && displayJobs()}
      </div>
    </>
  );
}

interface AvailableJobsProps {
  availableJobs: any;
  demo?: boolean;
}
