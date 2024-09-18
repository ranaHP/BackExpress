import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  try {
    const connection = await mongoose.connect(config.databaseURL);
    if (connection.connection.db){
        return connection.connection.db;
    }
    throw new Error('MongoDB connection error');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
