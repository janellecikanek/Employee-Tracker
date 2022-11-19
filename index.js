const inquirer = require('inquirer');
const fs = require('fs');
//REQUIRE SCHEMA?
//let teamArr = []

const optionPrompt = () => {
  return inquirer.prompt([
{
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["View all departments", "View all roles", 'View all employees', 'Add a department', "Add a role", "Add an employee", "Update an employee role"]
}
 ])
//******SHOW DEPTARTMENT TABLE{
when: (input) => input.options === "View all departments"
},

//****SHOW ROLE TABLE{
  when: (input) => input.options === "View all roles"
},

//******SHOW JOINED TABLE{
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",
    when: (input) => input.role === "Intern"
  },

when: (input) => input.options === "View all employees"
},
const departmentPrompt = () => {
    return inquirer.prompt([
{
  type: 'input',
  name: 'deptName',
  message: "What is the name of the department?",
  when: (input) => input.options === "Add a department"
},
//*********Add department to database{


// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

//********Add role to database
const rolePrompt = () => {
  return inquirer.prompt([

{
  type: 'input',
  name: 'roleName',
  message: "What is the name of the role?",
  when: (input) => input.options === "Add a role"
},
{
  type: 'input',
  name: 'roleSalary',
  message: "What is the salary for this role?",
  when: (input) => input.options === "Add a role"
},
{
  type: 'input',
  name: 'roleDepartment',
  message: "What department is this role in?",
  when: (input) => input.options === "Add a role"
},

//WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
//**********Add employee to database{

  const employeePrompt = () => {
    return inquirer.prompt(
    type: 'input',
    name: 'employeeFirstName',
    message: "What is the first name of the employee?",
  when: (input) => input.options === "Add an employee"
},

{
  type: 'input',
  name: 'employeeLastName',
  message: "What is the last name of the employee?",
when: (input) => input.options === "Add an employee"
},

{
  type: 'input',
  name: 'employeeRole',
  message: "What is the role of the employee?",
when: (input) => input.options === "Add an employee"
},
{
  type: 'input',
  name: 'employeeMgr',
  message: "Who is the manager of the employee?",
when: (input) => input.options === "Add an employee"
},
//****************Update Employee in database

// 
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
const employeeRolePrompt = () => {
  return inquirer.prompt(
{
  type: "list",
  name: "employeeUpdate",
  message: "What employee would you like to update?",
  //choices: [****LIST ARRAY OF CURRENT EMPLOYEES]
  when: (input) => input.options === "Update an employee role"
},
//********UPDATE DATABASE with updated employee


// prompts.complete();

//     {
//       type: 'input',
//       name: 'office',
//       message: "Team manager's office number?",
//     }]).then(managerData => {
//       const { name, id, email, office } = managerData;
//       const manager = new Manager(name, id, email, office);
//       teamArr.push(manager)
//       console.log(manager)
//     })
// }
//     },
//     {
//       type: "confirm",
//       name: "addEmployee",
//       message: "Do you want to add another employee?",
//       default: false
//     }
//   ]).then(employeeData => {
//     let {name, id, email, role, github, school, addEmployee} = employeeData;
//     let employee;
//     if(role ===  "Intern") {
//       employee = new Intern(name, id, email, school);
//       console.log(employee)
//     } else if (role === "Engineer") {
//       employee = new Engineer(name, id, email, github)
//       console.log(employee)
//     }
//     teamArr.push(employee)
//     if(addEmployee) {
//       return employeePrompt(teamArr)
//     } else {
//       return teamArr
//     }
//   })
// }

// const writeToFile = data => {
//   fs.writeFile("./dist/index.html", data, err => {
//     console.log(data)
//     err ? console.log(err) : console.log("HTML created!")
//   })
// }
// managerPrompt().then (employeePrompt).then(teamArr => {
//   return generateHTML(teamArr)
// })
// .then(generatedPage => {
//   return writeToFile(generatedPage)
// })
// .catch(err => {
//   console.log(err)
// })