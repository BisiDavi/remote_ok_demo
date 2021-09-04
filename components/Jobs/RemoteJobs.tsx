import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AvailableJobs from "@components/Cards/AvailableJobs";
import fetchRemoteJobs from "@requests/fetchRemoteJobs";

export default function Remotejobs() {
  const [jobs, setJobs] = useState({
    number: 20,
    remoteJobs: null,
    hasMore: true,
  });
  function fetchMoreData() {
    if (jobs.remoteJobs.length >= 95) {
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
      loader={<h4>Loading ...</h4>}
      endMessage={<p>End</p>}
    >
      <AvailableJobs availableJobs={jobs.remoteJobs} />
    </InfiniteScroll>
  );
}
