require("dotenv").config();

const express = require("express");
const app = express();

const mysql = require("mysql");

//* Important that the user has standard authentication method for this to work
const con = mysql.createConnection({
  host: "localhost",
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.dbname,
});

con.connect((err) => {
  if (err) {
    console.log(err.code);
    return;
  }
  console.log("Connection to MySQL server established...");
});

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
