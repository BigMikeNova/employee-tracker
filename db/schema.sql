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
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee table
CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id)
);