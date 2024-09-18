import { IUser } from '../models_+olt/User';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;  // Add user property to Request
    }
  }
}