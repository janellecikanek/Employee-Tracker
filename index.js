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
      addDept().then(deptData => {
        console.log(deptData)
        console.table(deptData[0])
        menu();
      }).catch(error => console.log(error))
    }
  })
}
const addDept = () => {
  return db.promise().query('Select * FROM department')
}
const getDept = () => {
  return db.promise().query('Select * FROM department')
}
const addRole = () => {
  return db.promise().query('Select * FROM role')
}
const getRole = () => {
  return db.promise().query('SELECT * FROM role')
}
const getEmp = () => {
  return db.promise().query('SELECT * FROM employee')
}



//******SHOW JOINED TABLE{
//   {
//     type: 'input',
//     name: 'school',
//     message: "What is the intern's school?",
//     when: (input) => input.role === "Intern"
//   },

//   when: (input) => input.options === "View all employees"
// },
//   let deptArr[]
// const departmentPrompt = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'deptName',
//       message: "What is the name of the department?",
//       when: (input) => input.options === "Add a department"
//     },
//*********Add department to database{

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

//********Add role to database

//     let roleArr = []
// const rolePrompt = () => {
//     return inquirer.prompt([

//       {
//         type: 'input',
//         name: 'roleName',
//         message: "What is the name of the role?",
//         when: (input) => input.options === "Add a role"
//       },
//       {
//         type: 'input',
//         name: 'roleSalary',
//         message: "What is the salary for this role?",
//         when: (input) => input.options === "Add a role"
//       },
//       {
//         type: 'input',
//         name: 'roleDepartment',
//         message: "What department is this role in?",
//         when: (input) => input.options === "Add a role"
//       },

//WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
//**********Add employee to database{
//       Let employeeArr[]


//   const employeePrompt = () => {
//       return inquirer.prompt(
//         type: 'input',
//         name: 'employeeFirstName',
//         message: "What is the first name of the employee?",
//         when: (input) => input.options === "Add an employee"
// },

//       {
//         type: 'input',
//         name: 'employeeLastName',
//         message: "What is the last name of the employee?",
//         when: (input) => input.options === "Add an employee"
//   },

//     {
//       type: 'input',
//       name: 'employeeRole',
//       message: "What is the role of the employee?",
//       when: (input) => input.options === "Add an employee"
// },
//   {
//     type: 'input',
//     name: 'employeeMgr',
//     message: "Who is the manager of the employee?",
//     when: (input) => input.options === "Add an employee"
// },
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

