// QUESTIONS FOR OH SATURDAY W/ ALEX
// 1. Why are my prompt choices repeating?
// 2. Why are my console.tables coming back as undefined?
// 3. What does const { allowedNodeEnvironmentFlags } = require("process"); mean?


const inquirer = require("inquirer");
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require("process");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'AJ',
  // Your MySQL password
  password: 'Lifeisgood1989',
  database: 'employee_trackerDB'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  mainMenu();
});

function mainMenu() {
    inquirer.prompt([
        {
            name: "main",
            type: "list",
            message: "What do you want to do?",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role", "Exit"]
        }
    ])
    .then(response => {
        // console.log(response)
        switch (response.main) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add A Department":
                addDepartment();
                break;
            case "Add A Role":
                addRole();
                break;
            case "Add An Employee":
                addEmployee();
                break;
            case "Update An Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
                break;
            default:
                mainMenu();
        }
    });
}

// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepartments() {
    connection.query("SELECT * FROM departments", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employees", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

//THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    connection.query("SELECT * FROM roles", 
    (error, results) => {
        console.table(results);
        mainMenu();
    });
}

function addDepartment() {

}

function addEmployee() {

}

function addRole() {

}

function updateEmployeeRole() {

}

function exit() {
    connection.end();
}