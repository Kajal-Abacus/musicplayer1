const util = require("util");
const mysql = require("mysql");

// Connection to the database

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "remotemysql.com",
  user: "mrPrgnFHMi",
  password: "dFan2a0v8K",
  database: "mrPrgnFHMi"
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Something went wrong connecting to the database ...");
  }

  if (connection) {
    connection.release();
    return;
  }
});

pool.query = util.promisify(pool.query);

module.exports = pool;
