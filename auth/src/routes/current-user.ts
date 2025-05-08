import express from 'express';
import { Request, Response, RequestHandler } from 'express';
import { currentUser } from '@ylcommontic/common';

const router = express.Router();

const handleRequest: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.send({ currentUser: req.currentUser || null });
};

router.get('/api/users/currentuser', currentUser, handleRequest);

export { router as currentUserRouter };
