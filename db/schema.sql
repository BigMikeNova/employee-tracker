-- Create the employee_db database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Switch to the employee_db database
USE employee_db;

-- Department table
CREATE TABLE department (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(255)
);

-- Role table
CREATE TABLE role (
  role_id INT PRIMARY KEY AUTO_INCREMENT,
  role_title VARCHAR(255),
  salary DECIMAL(10, 2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- Employee table
CREATE TABLE employee (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

-- View all departments
SELECT department_id, department_name FROM departments;

-- View all roles
SELECT r.role_id, r.role_title, r.salary, d.department_name
FROM roles r
JOIN departments d ON r.department_id = d.department_id;

-- View all employees
SELECT e.employee_id, e.first_name, e.last_name, r.role_title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employees e
JOIN roles r ON e.role_id = r.role_id
JOIN departments d ON r.department_id = d.department_id
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-- Add a department
INSERT INTO departments (department_name) VALUES ('Operations');

-- Add a role
INSERT INTO roles (role_title, salary, department_id) VALUES ('Operations Manager', 5500.00, 3);

-- Add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Johnson', 2, 1);

-- Update an employee role
UPDATE employees
SET role_id = 3
WHERE employee_id = 2;
