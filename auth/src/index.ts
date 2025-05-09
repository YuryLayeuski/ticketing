import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  console.log('Starting on ....');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY is required');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is required');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error, 'Error connecting to MongoDB');
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!');
  });
};

void start();
