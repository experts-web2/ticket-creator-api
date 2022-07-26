require("dotenv").config({ path: ".env" });
var mysql = require("mysql");
const { HOST, USER, PASSWORD, DATABASE } = process.env;
var connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

module.exports = connection;
