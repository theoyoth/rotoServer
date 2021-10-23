const mariadb = require('mariadb')
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rotoserver',
  connectionLimit: 10,
})

module.exports = pool
