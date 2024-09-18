// Auth Middleware 
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send('Access Denied');
  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, 'supersecretkey');
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
};
