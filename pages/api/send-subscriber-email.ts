import mailjet from "node-mailjet";

export default function SendSubscriberEmail(req, res) {
  const { method } = req;
  switch (method) {
    case "POST": {
      try {
        mailjet.connect(
          process.env.MAIL_JET_API_PRIMARY,
          process.env.MAIL_JET_API_SECONDARY
        );
        const request = mailjet.post("send", { version: "v3.1" }).request({
          Messages: [
            {
              From: {
                Email: process.env.HOST_EMAIL,
                Name: process.env.HOST_USERNAME,
              },
              To: [
                {
                  Email: req.body.email,
                  Name: req.body.email,
                },
              ],
              Subject: `Hello ${req.body.email}`,
              TextPart: "Thanks for Visiting Remote Demo",
              HTMLPart: `<div>
            <h3>Dear ${req.body.email}, thanks for subscribing to ${req.body.duration} email on remote demo, thanks for visiting my site.You rock!, Have you tried posting a job? </h3>
            <p>Visit <a href="https://remote-ok-demo.vercel.app/hire-remotely">Remote Demo</a> to post a job.</p>
            </div>`,
              CustomID: "WelcomeMessage",
            },
          ],
        });
        const mailResult = request
          .then((result) => {
            console.log("result", result.body);
          })
          .catch((error) => {
            console.error("error", error.statusCode);
          });
        return res.status(201).json({
          success: true,
          result: mailResult,
        });
      } catch (error) {
        return res.status(400).json({ error, message: "unable to send email" });
      }
    }
    default:
      return null;
  }
}
