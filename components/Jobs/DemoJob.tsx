import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchDemoJobs from "@requests/fetchDemoJobs";

export default function Demojobs() {
  const [jobs, setJobs] = useState<jobState>({
    number: 1,
    demoJobs: null,
    hasMore: true,
  });
  function fetchMoreData() {
    fetchDemoJobs()
      .then((response) => {
        setJobs({ ...jobs, demoJobs: response.data.result });
        return response.data;
      })
      .catch((error) => {
        console.error("error", error);
        return error;
      });
    if (jobs.demoJobs?.length >= 1) {
      setJobs({ ...jobs, hasMore: false });
    }
  }
  return (
    <InfiniteScroll
      dataLength={10}
      next={fetchMoreData}
      hasMore={jobs.hasMore}
      loader={<h4>Loading ...</h4>}
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
