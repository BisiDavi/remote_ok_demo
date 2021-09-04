/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchRemoteJobs from "@requests/fetchRemoteJobs";
import JobLoader from "@components/Loading/JobLoader";

export default function Remotejobs({ theme }) {
  const [jobs, setJobs] = useState<jobState>({
    remoteJobs: null,
    hasMore: true,
  });
  useEffect(() => {
    fetchRemoteJobs()
      .then((response) => {
        const mainJobs = response.data.filter((job) => job.company);
        setJobs({ ...jobs, remoteJobs: mainJobs });
        return response.data;
      })
      .catch((error) => {
        console.error("error", error);
        return error;
      });
  }, []);

  function fetchMoreData() {
    if (jobs.remoteJobs.length >= 90) {
      setJobs({ ...jobs, hasMore: false });
      return;
    }
  }
  return jobs.remoteJobs ? (
    <InfiniteScroll
      dataLength={jobs.remoteJobs.length}
      next={fetchMoreData}
      hasMore={jobs.hasMore}
      loader={<JobLoader theme={theme} />}
      endMessage={<p>End</p>}
    >
      <AvailableJobs availableJobs={jobs.remoteJobs} />
    </InfiniteScroll>
  ) : (
    <JobLoader theme={theme} />
  );
}

type jobState = {
  remoteJobs: null | [];
  hasMore: boolean;
};
