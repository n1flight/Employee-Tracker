drop database if exists Employee_Tracker_db;
CREATE DATABASE Employee_Tracker_db;

use Employee_Tracker_db;

create table employees (
	employeeId INT NOT NULL auto_increment,
    firstName varchar  (30),
    lastName varchar (100),
	roleId INT(10),
    managerId INT(10) DEFAULT 0,
    primary key (employeeId)
);

CREATE TABLE role (
	roleId INT NOT NULL auto_increment,
	role VARCHAR(30),
	salary DECIMAL(15),
	departmentId INT(10),
    primary key (roleId)
);
CREATE TABLE department (
	departmentId INT(10) NOT NULL auto_increment,
	departmentName VARCHAR(30),
    primary key (departmentId)
);