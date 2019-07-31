const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'rakha96',
        password: 'Mysql123',
        host: 'db4free.net',
        database: 'rakha96',
        port : 3306
    }
)

module.exports = conn
