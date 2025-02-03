import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/bingoangola',
  JWT_SECRET: process.env.JWT_SECRET || 'supersecret',
  PORT: process.env.PORT || '3000',
  SWAGGER_HOST: process.env.SWAGGER_HOST || 'localhost:3000',
};
