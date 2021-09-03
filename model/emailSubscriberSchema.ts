import mongoose from "mongoose";

const EmailSubscriberSchema = new mongoose.Schema({
  duration: String,
  email: String,
});

export default mongoose.models.EmailSubscribers ||
  mongoose.model("EmailSubscribers", EmailSubscriberSchema);
