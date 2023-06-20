"use strict";
const config = require('./config.js');
const Pool = require("pg").Pool;

const pool = new Pool({
  host: config.POSTGRES_HOST,
  user: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  port: config.POSTGRES_PORT,
  database: config.POSTGRES_DB
});

module.exports = pool;