var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DBHOST || "localhost",
  port: process.env.DBPORT || 8889,
  user: process.env.DBUSER || "root",
  password: process.env.DBPASS || "root",
  database: process.env.DBUSE || "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
