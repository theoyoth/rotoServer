const mariadb = require('mariadb')
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rotoserver',
  connectionLimit: 10,
  acquireTimeout:5000,
})

module.exports = pool
