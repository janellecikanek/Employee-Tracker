const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table')
const db = require("./config/connection")

const menu = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: ["View all departments", "View all roles", 'View all employees', 'Add a department', "Add a role", "Add an employee", "Update an employee role"]
    }
  ]).then((data) => {
    if (data.options === "View all employees") {
      getEmp().then((empData) => {
        console.log(empData)
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
        console.log(deptData)
        console.table(deptData[0])
        menu();
      })
    } else if (data.options === "View all roles") {
      getRole().then((roleData) => {
        console.log(roleData)
        console.table(roleData[0])
        menu();
      })
    } else if (data.options === 'Add a department') {
      addDept()
      // .then(deptData => {
      //   console.log(deptData)
      //   console.table(deptData[0])
      //   menu();
      // }).catch(error => console.log(error))
    }
  })
}
const getDept = () => {
  return db.promise().query('Select * FROM department')
}

const getRole = () => {
  return db.promise().query('SELECT * FROM role')
}
const getEmp = () => {
  return db.promise().query('SELECT * FROM employee')
};

const addDept = () => {
  // return db.promise().query('Select * FROM department')
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
    });
  })
}
const addRole = () => {
  //   return db.promise().query('Select * FROM role')
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
    //console.log(title)
    db.query("INSERT into role SET ?", {
      title: res.title,
      salary: res.salary,
    },
      function (err, result) {
        console.log(result)
        menu();
      });
  });
};
;
// const addEmp = () => {
  //   return db.promise().query('Select * FROM role')
  // inquirer.prompt([
  //   {
  //     type: 'input',
  //     name: 'roleName',
  //     message: "What is the name of the role?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'roleSalary',
  //     message: "What is the salary for this role?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'employeeFirstName',
  //     message: "What is the first name of the employee?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'employeeLastName',
  //     message: "What is the last name of the employee?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'employeeRole',
  //     message: "What is the role of the employee?",
  //   },
  //   {
  //     type: 'input',
  //     name: 'employeeMgr',
  //     message: "Who is the manager of the employee?",
  //   },
  //  ])
//.then(function (res) {
//     //console.log(title)
//     //db.query("INSERT into employee SET ?", {
//       first_name: res.employeeFirstName,
//       last_name: res.employeeLastName,
//     },
      // function (err, result) {
      //   console.log(result)
      //   menu();
      //  });
//   });
// };
// ;
//WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

//       Let employeeArr[]
//****************Update Employee in database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
// const employeeRolePrompt = () => {
//   return inquirer.prompt(
//     {
//       type: "list",
//       name: "employeeUpdate",
//       message: "What employee would you like to update?",
//       //choices: [****LIST ARRAY OF CURRENT EMPLOYEES]
//       when: (input) => input.options === "Update an employee role"
//     },
//     //********UPDATE DATABASE with updated employee

menu();
