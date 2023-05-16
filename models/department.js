const connection = require('./connection');

class Department {
  // Get all departments
  getAllDepartments() {
    return connection.query('SELECT * FROM department');
  }

  // Add a new department
  addDepartment(name) {
    return connection.query('INSERT INTO department SET ?', { name });
  }
}

module.exports = new Department();
