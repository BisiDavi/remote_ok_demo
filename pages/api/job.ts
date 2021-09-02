import connectToDatabase from "middlewares/database";
import Jobs from "../../model/jobSchema";

export default async function JobHandler(req, res) {
  const { method } = req;

  await connectToDatabase()
    .then(() => console.log("connected to db"))
    .catch((error) => console.error("error", error));

  switch (method) {
    case "POST": {
      try {
        const createJob = await Jobs.create(req.body);
        return res.status(201).json({
          success: true,
          result: createJob,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ error, message: "an error occured, unable to create job" });
      }
    }
    case "GET": {
      try {
        const getJobs = await Jobs.find();
        return res.status(201).json({
          success: true,
          result: getJobs,
        });
      } catch (error) {
        return res.status(400).json({ error, message: "unable to fetch jobs" });
      }
    }
    default:
      return res.status(400).json({ message: "wrong request!" });
  }
}
