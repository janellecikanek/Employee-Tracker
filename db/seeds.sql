INSERT INTO department (id, name)
VALUES (1, Sales),
(2, Engineering),
(3, Finance),
(4, Legal);

INSERT INTO role (id, title, salary, department id,)
VALUES (1, Sales Lead, 100000, 1),
(2, Salesperson, 80000, 1),
(3, Lead Engineer, 150000, 2),
(4, Software Engineer, 120000, 2), 
(5, Account Manager, 160000, 3),
(6, Accountant, 125000, F3), 
(7, Legal Team Lead, 250000, 4),
(8, Lawyer, 190000, 4);

INSERT INTO employee (id, first_name, Last_name, role_id, manager_id)
VALUES  (1, John, Doe, null),
(2, Mike, Chan, John Doe),
(3, Ashley, Rodriguez, null),
(4, Kavin, Tupik, Ashley Rodriguez), 
(5, Kunal, Singh, null),
(6, Malia, Brown, Kunal Singh), 
(7, Sarah, Lourd, null),
(8, Tom, Allen, Sarah Lourd);




CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT 
    FOREIGN KEY (role_id)
    REFERENCES role(id)


need to join with title , department, salary, 