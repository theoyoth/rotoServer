const mariadb = require('mariadb')
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rotoserver',
  // connectionLimit: 150,
  acquireTimeout: 300000,
})

module.exports = pool
