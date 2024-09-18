// User resolver 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models_+olt/user';
import Role from '../models_+olt/role';

export const userResolver = {
  Query: {
    getUsers: async () => await User.find().populate('roles'),
  },
  Mutation: {
    createUser: async (_: any, { username, password }: { username: string, password: string }) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, password: hashedPassword });
      return await user.save();
    },
    assignRoleToUser: async (_: any, { userId, roleId }: { userId: string, roleId: string }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      user.roles.push(roleId);
      return await user.save();
    },
    login: async (_: any, { username, password }: { username: string, password: string }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid credentials');
      return jwt.sign({ userId: user.id }, 'supersecretkey', { expiresIn: '1h' });
    },
  }
};
