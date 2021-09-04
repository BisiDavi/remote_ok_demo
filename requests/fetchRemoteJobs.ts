import axios from "axios";

export default async function fetchRemoteJobs() {
  await axios.get("https://remoteok.io/api");
}
