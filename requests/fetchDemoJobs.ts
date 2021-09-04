import axios from 'axios'

export default async function fetchDemoJobs(){
    await axios.get("/api/job")
}