import mongoose from "mongoose"

const SubscriberSchema = new mongoose.Schema(
  {
    email: String,
    duration: String,
  },
  { timestamps: true, collection: "subscribers" }
);


export default mongoose.models.jobposts ||
  mongoose.model("subscribers", SubscriberSchema);
