import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema(
  {
    companyName: String,
    position: String,
    primaryTag: String,
    tags: String,
    showLogo: Boolean,
    sendEmail: Boolean,
    matchApplicant: Boolean,
    highlightPost: Boolean,
    stickPost: String,
    annualSalary: String,
    howToApply: String,
    apply_url: String,
    companyEmail: String,
    feedback: String,
  },
  { timestamps: true, collection: "jobposts" }
);

export default mongoose.models.jobposts ||
  mongoose.model("jobposts", JobPostSchema);
