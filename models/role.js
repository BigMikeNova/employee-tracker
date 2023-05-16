const connection = require('./connection');

class Role {
  // Get all roles
  getAllRoles() {
    return connection.query(`
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      INNER JOIN department ON role.department_id = department.id
    `);
  }

  // Add a new role
  addRole(title, salary, departmentId) {
    return connection.query('INSERT INTO role SET ?', {
      title,
      salary,
      department_id: departmentId,
    });
  }
}

module.exports = new Role();
