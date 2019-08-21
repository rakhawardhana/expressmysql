const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'userbersama',
        password: 'Mysql123',
        host: 'localhost',
        database: 'dnatechnology',
        port : 3306
    }
)

module.exports = conn
