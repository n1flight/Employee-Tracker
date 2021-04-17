var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Employee_Tracker_db"
})

connection.connect(err => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`)
})


function runManager() {
    inquirer
        .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View Departments",
            "View Roles",
            "View Employees",
            "EXIT"
        ]
        })
        .then(function(answer) {
        switch (answer.action) {
        case "Add Department":
            addDepartment();
        break;

        case "Add Role":
            addRole();
        break;

        case "Add Employee":
            addEmployee();
        break;

        case "View Departments":
            viewDepartments();
        break;

        case "View Roles":
            viewRoles();
        break;

        case "View Employees":
            viewEmployees();
        break;

        case "EXIT":
            connection.end();
        break;
        }
        });
}

function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Enter the department you want to add."
        }).then(function(answer) {
            connection.query('', function(err, res) {
                runManager()
            })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
            name: "role",
            type: "input",
            message: "Enter the role you want to add."
            },
            {
            name: "salary",
            type: "input",
            message: "How much is the salary?"
            }
    ]).then(function(answer) {
            connection.query('INSERT INTO `Employee_Tracker_db`.`role` (`title`,`salary`) VALUES (<{title: }>, <{salary: }>);', function(err, res) {
                runManager()
            })
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
            },
            {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
            }
        ]).then(function(answer) {
            connection.query('INSERT INTO `Employee_Tracker_db`.`employees` (`first_name`, `last_name`) VALUES (<{first_name: }>, <{last_name: }>);', function(err, res) {
                if (err) throw err
                runManager()
            })
        })
}

function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Enter the department you want to add."
        }).then(function(answer) {
            connection.query('INSERT INTO `Employee_Tracker_db`.`department` (`name`) VALUES ?', {name: answer.department}, function(err, res) {
                if (err) throw err
                runManager()
            })
        })
}

function viewDepartments () {
    connection.query('SELECT `department`.`name` FROM `Employee_Tracker_db`.`department`;', function(err, res) {
        if (err) throw err
        console.table(res)
        runManager()
    })
}

function viewRoles() {
    connection.query("SELECT `role`.`title` FROM `Employee_Tracker_db`.`role`", function(err, res) {
        if (err) throw err
        console.table(res)
        runManager()
    })
}

function viewAll() {
    connection.query('SELECT `employees`.`first_name`, `employees`.`last_name` FROM `Employee_Tracker_db`.`employees`;', function(err, res) {
        if (err) throw err
        console.table(res)
        runManager()
    })
}

runManager()
