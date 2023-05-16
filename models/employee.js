const connection = require('../db/connection');

class Employee {
  // Get all employees
  viewAllEmployees() {
    return connection.query(`
      SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, 
      department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      INNER JOIN role ON employee.role_id = role.id
      INNER JOIN department ON role.department_id = department.id
    `);
  }
}

module.exports = new Employee();
