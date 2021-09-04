import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchRemoteJobs from "@requests/fetchRemoteJobs";
import JobLoader from "@components/Loading/JobLoader";

export default function Remotejobs({ theme }) {
  const [jobs, setJobs] = useState({
    number: 20,
    remoteJobs: null,
    hasMore: true,
  });
  console.log("jobs", jobs);
  function fetchMoreData() {
    if (jobs.remoteJobs?.length >= 90) {
      setJobs({ ...jobs, hasMore: false });
    }
    fetchRemoteJobs()
      .then((response) => {
        setJobs({ ...jobs, remoteJobs: response.data });
        return response.data;
      })
      .catch((error) => {
        console.error("error", error);
        return error;
      });
  }
  return (
    <InfiniteScroll
      dataLength={10}
      next={fetchMoreData}
      hasMore={jobs.hasMore}
      loader={<JobLoader theme={theme} />}
      endMessage={<p>End</p>}
    >
      <AvailableJobs availableJobs={jobs.remoteJobs} />
    </InfiniteScroll>
  );
}
