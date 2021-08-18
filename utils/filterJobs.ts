export function showWorldWideJobs (jobs){
    const worldWideJobs = jobs.filter(job => job.location === "Worldwide")
    console.log('wordwideJobs',worldWideJobs)
    return worldWideJobs;
}