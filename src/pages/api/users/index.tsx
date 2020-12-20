import { NextApiResponse } from "next";
import nc from "next-connect";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import { user } from "../../../db";
import { Request } from "../../../../types";

const handler = nc<Request, NextApiResponse>({
  onError
});

handler.use(middleware);

handler.post(async (req,res) => {
  const registerUser = await User.addUser(req.db, {})
  res.send({data : registerUser})
})