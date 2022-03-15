const mariadb = require('mariadb')
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rotoserver',
  acquireTimeout: 300000,
})

module.exports = pool
