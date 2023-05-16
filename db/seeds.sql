-- Insert sample departments
INSERT INTO department (name) VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Marketing');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Software Engineer', 85000, 1),
  ('Sales Manager', 95000, 2),
  ('Financial Analyst', 75000, 3),
  ('Marketing Specialist', 65000, 4);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id) VALUES
  ('John', 'Doe', 1),
  ('Jane', 'Smith', 2),
  ('Mike', 'Johnson', 3),
  ('Sarah', 'Williams', 4);
