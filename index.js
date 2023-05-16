const inquirer = require('inquirer');
const db = require('./db');

// Function to start the application
function startApp() {
  // Prompt the user to choose an action
  inquirer
    .prompt([
      {
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          db.viewAllDepartments();
          startApp();
          break;
        case 'View all roles':
          db.viewAllRoles();
          startApp();
          break;
        case 'View all employees':
          db.viewAllEmployees();
          startApp();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting the application...');
          process.exit();
          break;
        default:
          console.log('Invalid option. Please try again.');
          startApp();
      }
    });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the department:',
      },
    ])
    .then((answers) => {
      db.addDepartment(answers.departmentName);
      console.log('Department added successfully!');
      startApp();
    });
}

// Function to add a role
function addRole() {
  // Get department choices
  const departments = db.getAllDepartments();

  // Prompt the user to enter role details
  inquirer
    .prompt([
      {
        name: 'roleTitle',
        type: 'input',
        message: 'Enter the title of the role:',
      },
      {
        name: 'roleSalary',
        type: 'input',
        message: 'Enter the salary for the role:',
      },
      {
        name: 'departmentId',
        type: 'list',
        message: 'Select the department for the role:',
        choices: departments.map((department) => ({
          name: department.name,
          value: department.id,
        })),
      },
    ])
    .then((answers) => {
      db.addRole(answers.roleTitle, answers.roleSalary, answers.departmentId);
      console.log('Role added successfully!');
      startApp();
    });
}

// Function to add an employee
function addEmployee() {
  // Get role choices
  const roles = db.getAllRoles();

  // Prompt the user to enter employee details
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: "Enter the employee's first name:",
      },
      {
        name: 'lastName',
        type: 'input',
        message: "Enter the employee's last name:",
      },
      {
        name: 'roleId',
        type: 'list',
        message: "Select the employee's role:",
        choices: roles.map((role) => ({
          name: role.title,
          value: role.id,
            })),
          },
          {
            name: 'managerId',
            type: 'input',
            message: "Enter the employee's manager ID (optional):",
          },
        ])
        .then((answers) => {
          db.addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId);
          console.log('Employee added successfully!');
          startApp();
        });
    }
    
    // Function to update an employee role
    function updateEmployeeRole() {
      // Get employee choices
      const employees = db.getAllEmployees();
    
      // Get role choices
      const roles = db.getAllRoles();
    
      // Prompt the user to select an employee and a new role
      inquirer
        .prompt([
          {
            name: 'employeeId',
            type: 'list',
            message: 'Select the employee to update:',
            choices: employees.map((employee) => ({
              name: `${employee.firstName} ${employee.lastName}`,
              value: employee.id,
            })),
          },
          {
            name: 'roleId',
            type: 'list',
            message: 'Select the new role for the employee:',
            choices: roles.map((role) => ({
              name: role.title,
              value: role.id,
            })),
          },
        ])
        .then((answers) => {
          db.updateEmployeeRole(answers.employeeId, answers.roleId);
          console.log('Employee role updated successfully!');
          startApp();
        });
    }
    
    // Start the application
    startApp();
    
