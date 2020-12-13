import mongoose from "mongoose";

global.mongo = global.mongo || {};

export const connectToDB = async () => {
  if (!global.mongo.client) {
    global.mongo.client = mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 1000
    });
    console.log("connecting to DB ...");
    await global.mongo.client.connect();
    console.log("connected to DB!");
  }
  const db = global.mongo.client.db("remoteok");
  return { db, dbClient: global.mongo.client };
};
