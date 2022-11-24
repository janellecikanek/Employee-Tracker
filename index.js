const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table')
const db = require("./config/connection")

//View all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const menu = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: ["View all departments", "View all roles", 'View all employees', 'Add a department', "Add a role", "Add an employee", "Update an employee role"]
    }
    // WHEN I choose to view all departments
    // THEN I am presented with a formatted table showing department names and department ids
    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  ]).then((data) => {
    if (data.options === "View all employees") {
      getEmp().then((empData) => {

        console.table(empData[0])
        menu();
      })
    } else if (data.options === "Add an employee") {
      return addEmp();
    } else if (data.options === "Add a role") {
      return addRole();
    } else if (data.options === "Update an employee role") {
      return updateRole();
    } else if (data.options === "View all departments") {
      getDept().then((deptData) => {
        console.table(deptData[0])
        menu();
      })

      // WHEN I choose to view all roles
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    } else if (data.options === "View all roles") {
      getRole().then((roleData) => {
        console.table(roleData[0])
        menu();
      })
    } else if (data.options === 'Add a department') {
      addDept()
    }
  })
}
const getDept = () => {
  return db.promise().query('Select * FROM department')
}

const getRole = () => {
  return db.promise().query('SELECT title, salary, id FROM role')
}
const getEmp = () => {
  return db.promise().query('SELECT id, first_name, last_name, manager_id FROM employee')
};

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDept = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'dept',
      message: "What's your department name",
    },
  ]).then(function (deptName) {
    console.log(deptName)
    db.query("INSERT into department(name) VALUES (?)", deptName.dept, function (err, result) {
      console.log(result)
      menu();
    });
  })
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: "What is the name of the role?",
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: "What is the salary for this role?",
    },
  ]).then(function (res) {
    db.query("INSERT into role SET ?", {
      title: res.roleName,
      salary: res.roleSalary,
    },
      function (err, result) {
        if (err) {
          console.log(err)
        }

        menu();
      });
  });
};
;

const selectRole = () => {
  let roleArr = []
  const query = "SELECT * FROM role"
  db.query(query, function (err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roleArr.push(res[i].title)
    }
  })
  return roleArr
}

const selectMan = () => {
  let manArr = []
  const query = "SELECT first_name, last_name FROM employee WHERE manager_id IS NULL"
  db.query(query, function (err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      manArr.push(res[i].first_name)
    }
  })
  return manArr
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmp = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employeeFirstName',
      message: "What is the first name of the employee?",
    },
    {
      type: 'input',
      name: 'employeeLastName',
      message: "What is the last name of the employee?",
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: "What is the role of the employee?",
      choices: selectRole()
    },
    {
      type: 'list',
      name: 'employeeMgr',
      message: "Who is this employees manager?",
      choices: selectMan(),
    },
  ]).then(function (res) {
    const roleId = selectRole().indexOf(res.employeeRole) + 1
    const managerId = selectMan().indexOf(res.employeeMgr) + 1
    db.query("INSERT into employee SET ?", {
      first_name: res.employeeFirstName,
      last_name: res.employeeLastName,
      role_id: roleId,
      manager_id: managerId,
    },
      function (err, result) {
        if (err) throw err
        console.log(result)
        menu();
      });
  });
};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const updateRole = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeUpdate',
      message: "What employee would you like to update?",
      choices: getEmp(),
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: "What is the new role of the employee?",
      choices: selectRole(),
    },
  ]).then(function (res) {
    const name = updateEmp().indexOf(res.employeeUpdate) + 1
    const newRole = selectRole().indexOf(res.employeeRole) + 1
    db.query("UPDATE employee SET ?", {
      first_name: res.employeeFirstName,
      last_name: res.employeeLastName,
      role_id: roleId,
    },
      function (err, result) {
        if (err) throw err
        console.log(result)
        menu();
      });
  });
};

menu();