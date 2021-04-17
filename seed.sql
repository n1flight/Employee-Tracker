use Employee_Tracker_db;
employees
insert into department (name)

values 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

insert into role (title, salary, department_id)

values 
    ("General Manager", 100000, 1),
    ("Accountant", 85000, 1),
    ("Software Engineer", 97000, 2),
    ("Intern developer", 30000, 2),
    ("janitor", 39000, 3),
    ("Back Office", 45000, 3);

insert into employee (first_name, last_name, role_id, manager_id)

values 
    ("John", "Doe", 1, 1),
    ("Itachi", "Uchiha", 2, NULL),
    ("Peter", "Griffin", 3, 1),
    ("Harry", "Potter", 4, NULL),
    ("The", "Rock", 5, 1),
    ("Spongebob", "Squarepants", 6, NULL);