const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employee_db',
});

db.connect((err) => {
  if (err) throw err;
});

module.exports = db;
