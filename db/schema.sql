-- Create the employee_db database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Switch to the employee_db database
USE employee_db;

-- Department table
CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);

-- Role table
CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  salary DECIMAL(10, 2),
  FOREIGN KEY (id) REFERENCES department(id)
);

-- Employee table
CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  FOREIGN KEY (id) REFERENCES role(id),
);

-- -- View all department
-- SELECT id, name FROM department;

-- -- View all role
-- SELECT r.id, r.title, r.salary, d.name
-- FROM role r
-- JOIN department d ON r.id = d.id;

-- -- View all employee
-- SELECT e.employee_id, e.first_name, e.last_name, r.title, d.name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
-- FROM employee e
-- JOIN role r ON e.id = r.id
-- JOIN department d ON r.id = d.id
-- LEFT JOIN employee m ON e.id = m.employee_id;

-- -- Add a department
-- INSERT INTO department (name) VALUES ('Operations');

-- -- Add a role
-- INSERT INTO role (title, salary, id) VALUES ('Operations Manager', 5500.00, 3);

-- -- Add an employee
-- INSERT INTO employee (first_name, last_name, id, id) VALUES ('Sarah', 'Johnson', 2, 1);

-- -- Update an employee role
-- UPDATE employee
-- SET id = 3
-- WHERE employee_id = 2;
