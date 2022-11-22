SELECT employee.id, employee.first_name, employee.last_name, department.name, role.title, role.salary, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee 
    JOIN role on role.id = employee.role_id 
    JOIN department on department.id = role.department_id 
    LEFT JOIN employee e on employee.manager_id = e.id;


