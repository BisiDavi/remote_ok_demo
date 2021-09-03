import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    primaryTag: String,
    tags: String,
    location: String,
    stickPost: String,
    annualSalary: String,
    description: String,
    howToApply: String,
    apply_url: String,
    companyEmail: String,
    feedback: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Jobs || mongoose.model("Jobs", JobSchema);
