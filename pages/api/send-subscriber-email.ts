import mailjet from "node-mailjet";

export default function SendSubscriberEmail(req, res) {
  const { method } = req;
  switch (method) {
    case "POST": {
      mailjet.connect(
        "bcb48fa229fa4a413134dab4bc534daf",
        "319d07f39d9a96e41a5b29cb2e5fcd42"
      );
      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "oludavidconnect@gmail.com",
              Name: "Olubisi",
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
      request
        .then((result) => {
          console.log("result", result.body);
        })
        .catch((error) => {
          console.error("error", error.statusCode);
        });
    }
    default:
      return null;
  }
}
