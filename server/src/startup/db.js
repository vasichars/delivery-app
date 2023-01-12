import mongoose from 'mongoose';
import config from 'config';
import logger from '../startup/logger.js';

mongoose.set('strictQuery', false);

const host = config.get('db.host');
const port = config.get('db.port');
const database = config.get('db.name');
const username = config.get('db.user');
const password = config.get('db.pass');

export const mongoUri = `mongodb://${username}:${password}@${host}:${port}/${database}`;

const dbConnect = async () => {
  await mongoose.connect(mongoUri);
  logger.info(`Connection to "${database}" database has been established successfully`);
};

export default dbConnect;