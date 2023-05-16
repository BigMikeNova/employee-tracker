const connection = require('./connection');

class Employee {
  // Get all employees
  getAllEmployees() {
    return connection.query(`
      SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, 
      department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      INNER JOIN role ON employee.role_id = role.id
      INNER JOIN department ON role.department_id = department.id
      LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `);
  }

  // Add a new employee
  addEmployee(firstName, lastName, roleId, managerId) {
    return connection.query('INSERT INTO employee SET ?', {
      first_name: firstName,
      last_name: lastName,
      role_id: roleId,
      manager_id: managerId,
    });
  }

  // Update an employee's role
  updateEmployeeRole(employeeId, roleId) {
    return connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  }
}

module.exports = new Employee();
