
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "apple@17",
    database: "node_intro"
})

module.exports = pool.promise()