var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "card.chmujb9p9mc9.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "adminadmin",
  database: "task",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

module.exports = connection;
