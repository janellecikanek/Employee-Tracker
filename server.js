const inquirer = require('inquirer');
const fs = require('fs');

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

//     {
//       type: 'input',
//       name: 'name',
//       message: "Team manager's name?",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Team manager's employee ID?",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Team manager's email",
//     },
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

// const employeePrompt = () => {
//   return inquirer.prompt([
//     {
//       type: "list",
//       name: "role",
//       message: "What is this employee's role?",
//       choices: ["Engineer", "Intern"]
//     },
//     {
//       type: 'input',
//       name: 'name',
//       message: "Employee's name?",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Employee's ID?",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Employee's email",
//     },
//     {
//       type: 'input',
//       name: 'school',
//       message: "What is the intern's school?",
//       when: (input) => input.role === "Intern"
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: "What is the engineer's github?",
//       when: (input) => input.role === "Engineer"
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