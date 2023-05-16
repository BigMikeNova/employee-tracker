const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'your_username',
  password: 'your_password',
  database: 'employee_tracker_db',
  connectionLimit: 10,
  multipleStatements: true,
});

// Get a connection from the pool
const connection = pool.promise();

module.exports = connection;
