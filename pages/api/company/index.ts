import { NextApiResponse } from "next";
import nc from "next-connect";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import { company } from "../../../db";
import { Request } from "../../../../types";

const handler = nc<Request, NextApiResponse>({
  onError
});

handler.use(middleware);
handler.post(async (req, res) => {
  const newJobPost = await company.addJob(req.db, {
    company: req.body.company_name,
    company_logo: req.body.company_logo,
    description: req.body.description,
    location: req.body.location,
    position: req.body.position,
    tags: req.body.tags,
    url: req.body.url
  });
  res.send({ data: newJobPost });
});

export default handler;
