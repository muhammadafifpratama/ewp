const config = require('../config.json');
const Pool = require('pg').Pool

const { host, user, password, database, port } = config.database;
const db = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
  })

module.exports = db;