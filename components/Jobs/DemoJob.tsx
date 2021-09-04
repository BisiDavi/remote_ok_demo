import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchDemoJobs from "@requests/fetchDemoJobs";
import JobLoader from "@components/Loading/JobLoader";

export default function Demojobs({theme}) {
  const [jobs, setJobs] = useState<jobState>({
    number: 1,
    demoJobs: null,
    hasMore: true,
  });
  function fetchMoreData() {
    if (jobs.demoJobs?.length > 1) {
      setJobs({ ...jobs, hasMore: false });
    }
    fetchDemoJobs()
      .then((response) => {
        setJobs({ ...jobs, demoJobs: response.data.result });
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
    >
      <AvailableJobs availableJobs={jobs.demoJobs} />
    </InfiniteScroll>
  );
}

type jobState = {
  number: number;
  demoJobs: null | [];
  hasMore: boolean;
};
