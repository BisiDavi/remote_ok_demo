import connectToDatabase from "../../middlewares/database";
import EmailSubscribers from "../../model/emailSubscriberSchema";

export default async function EmailSubscriber(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "POST": {
      try {
        const emailSubscribe = await EmailSubscribers.create(req.body);
        return res.status(201).json({
          success: true,
          result: emailSubscribe,
        });
      } catch (error) {
        return res.status(400).json({
          error,
          message: "an error occured, unable to subscribe",
        });
      }
    }
    case "GET": {
      try {
        const getEmailSubscribers = await EmailSubscribers.find();
        return res.status(201).json({
          success: true,
          result: getEmailSubscribers,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ error, message: "unable to fetch email subscribers" });
      }
    }
    default:
      return res.status(400).json({ message: "wrong request!" });
  }
}
