// config.js
const dotenv = require('dotenv');
const path = require('path');

console.log('path to env file: ', path.resolve(__dirname, process.env.NODE_ENV + '.env'));

dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'local',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 8005,
  POSTGRES_HOST: process.env.POSTGRES_HOST || '127.0.0.1',
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'techno',
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  POSTGRES_DB: process.env.POSTGRES_DB || 'siani'
}