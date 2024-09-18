import jwt from 'jsonwebtoken';
import config from '../../config';

const getTokenFromHeader = (req: any) => {
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

const isAuth = (req: any, res: any, next: any) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  jwt.verify(token, config.jwtSecret, { algorithms: ['HS256'] }, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.token = decoded; // Attach the decoded token to req.token
    next(); // Proceed to the next middleware or route handler
  });
};

export default isAuth;