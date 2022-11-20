SELECT
role.department_id AS name, department.id AS dept 
FROM employee
JOIN department ON role.department_id = department.id
table 3 employee id, first name, last name, title, department, salary, manager


