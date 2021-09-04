import axios from "axios";

export default async function fetchDemoJobs() {
  return await axios.get("/api/job");
}
