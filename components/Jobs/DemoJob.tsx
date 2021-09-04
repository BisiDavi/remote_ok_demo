/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchDemoJobs from "@requests/fetchDemoJobs";
import JobLoader from "@components/Loading/JobLoader";

export default function Demojobs({ theme }) {
  const [jobs, setJobs] = useState<jobState>({
    demoJobs: null,
    hasMore: true,
  });

  useEffect(() => {
    fetchDemoJobs()
      .then((response) => {
        setJobs({ ...jobs, demoJobs: response.data.result });
        return response.data;
      })
      .catch((error) => {
        console.error("error", error);
        return error;
      });
  }, []);

  console.log("jobs.demoJobs", jobs);
  function fetchMoreData() {
    if (jobs.demoJobs !== null && jobs.demoJobs.length > 1) {
      setJobs({ ...jobs, hasMore: false });
      return;
    }
  }
  return jobs.demoJobs ? (
    <InfiniteScroll
      dataLength={jobs.demoJobs.length}
      next={fetchMoreData}
      hasMore={jobs.hasMore}
      loader={<JobLoader theme={theme} />}
      endMessage={<p>End</p>}
    >
      <AvailableJobs availableJobs={jobs.demoJobs} />
    </InfiniteScroll>
  ) : (
    <JobLoader theme={theme} />
  );
}

type jobState = {
  demoJobs: null | [];
  hasMore: boolean;
};
