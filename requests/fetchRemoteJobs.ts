import axios from "axios";

export default async function fetchRemoteJobs() {
  return await axios.get("https://remoteok.io/api");
}
