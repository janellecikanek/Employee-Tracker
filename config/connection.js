const Sequelize = require('sequelize');
const mysql = require('myssql2');

require("dotenv").config();

const connection = mysql.createConnection(
  {
    host: 'localhost',

    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  console.log('connected to the database')
);

connection.connect((err) => {
  if (err) {
  throw err;
  }
})

module.exports = connection;
