import { NextApiResponse } from 'next';
import nc from 'next-connect';
import middleware from '../../../middleware/all';
import onError from '../../../middleware/error';
import { user } from '../../../db';
import { Request } from '../../../../types';

const handler = nc<Request, NextApiResponse>({
  onError
});

handler.use(middleware);

handler.post(async (req, res) => {
  const registerUser = await user.registerUser(req.db, {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  res.send({ data: registerUser });
});
