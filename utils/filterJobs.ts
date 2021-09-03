export function showWorldWideJobs(jobs) {
  const worldWideJobs = jobs?.filter((job) => job.location === "Worldwide");
  return worldWideJobs;
}
