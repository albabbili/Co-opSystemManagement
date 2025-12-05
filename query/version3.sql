DROP DATABASE IF EXISTS CoopManagementSystem;
CREATE DATABASE IF NOT EXISTS CoopManagementSystem;
use CoopManagementSystem;

CREATE TABLE IF NOT EXISTS SystemUser (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) UNIQUE,
    userPassword VARCHAR(250),
    userRole VARCHAR(250)
    );

CREATE TABLE IF NOT EXISTS Employer (
    employeeID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    FOREIGN KEY (userID) REFERENCES SystemUser(userID)
    );
    
CREATE TABLE IF NOT EXISTS Company (
    companyID INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(250),
    companyLocation VARCHAR(250),
    companyWebsite VARCHAR(250),
    employeeID INT,
    FOREIGN KEY (employeeID) REFERENCES Employer(employeeID)
    );
    
CREATE TABLE IF NOT EXISTS EmployerContact (
    contactEmail VARCHAR(250) PRIMARY KEY,
    contactName VARCHAR(250),
    contactPhone VARCHAR(15),
    employeeID INT,
    FOREIGN KEY (employeeID) REFERENCES Employer(employeeID)
    );
    


CREATE TABLE IF NOT EXISTS Department(
    departmentID INT AUTO_INCREMENT PRIMARY KEY,
    departmentDescription VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS Faculty(
    facultyID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    departmentID INT,
    FOREIGN KEY (userID) REFERENCES SystemUser(userID),
    FOREIGN KEY (departmentID) REFERENCES Department(departmentID)
);
CREATE TABLE IF NOT EXISTS FacultyContact(
    facultyEmail VARCHAR(250) PRIMARY KEY,
    facultyName VARCHAR(250),
    facultyID INT,
    FOREIGN KEY (facultyID) REFERENCES Faculty(facultyID)
);

CREATE TABLE IF NOT EXISTS Student(
    studentID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    departmentID INT,
    resumeURL VARCHAR(250),
    FOREIGN KEY (userID) REFERENCES SystemUser(userID),
    FOREIGN KEY (departmentID) REFERENCES Department(departmentID)
);
CREATE TABLE IF NOT EXISTS StudentContact(
    studentEmail VARCHAR(250) PRIMARY KEY,
    studentName VARCHAR(250),
    studentPhone INT,
    studentID INT,
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);

CREATE TABLE IF NOT EXISTS Major(
    majorID INT AUTO_INCREMENT PRIMARY KEY,
    majorDescription VARCHAR(250)
);
CREATE TABLE IF NOT EXISTS StudentStanding(
    standing VARCHAR(250) PRIMARY KEY,
    studentID INT,
    majorID INT,
    creditHoursComplete INT,
    gpa DECIMAL(5,2),
    startSemester VARCHAR(25),
    startYear INT,
    isTransfer VARCHAR(3),
    FOREIGN KEY (studentID) REFERENCES Student(studentID),
    FOREIGN KEY (majorID) REFERENCES Major(majorID)
);

CREATE TABLE IF NOT EXISTS Internship(
    internshipID INT AUTO_INCREMENT PRIMARY KEY,
    employeeID INT,
    FOREIGN KEY (employeeID) REFERENCES Employer(employeeID)
);
CREATE TABLE IF NOT EXISTS InternshipDescription(
    internshipID INT,
    title VARCHAR(250),
    internDescription VARCHAR(250),
    internWeeks INT,
    hoursPerWeek INT,
    internLocation VARCHAR(250),
    majorsOfInterest VARCHAR(250),
    salary INT,
    internStatus VARCHAR(250),
    PRIMARY KEY (title, internDescription),
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID)
);
CREATE TABLE IF NOT EXISTS InternshipMajor(
    internshipID INT,
    majorID INT,
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (majorID) REFERENCES Major(majorID)
);
CREATE TABLE IF NOT EXISTS Skills(
    skillsID INT AUTO_INCREMENT PRIMARY KEY,
    requiredSkills VARCHAR(250),
    preferredSkills VARCHAR(250)
);
CREATE TABLE IF NOT EXISTS InternshipSkill(
    internshipID INT,
    skillsID INT,
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (skillsID) REFERENCES Skills(skillsID)    
);
CREATE TABLE IF NOT EXISTS InternshipOffer(
    internshipID INT,
    studentID INT,
    offerLetterURL VARCHAR(250) PRIMARY KEY,
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);

CREATE TABLE IF NOT EXISTS StudentApplication(
    applicationID INT AUTO_INCREMENT PRIMARY KEY,
    studentID INT,
    internshipID INT,
    applicationDate DATE,
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);
CREATE TABLE IF NOT EXISTS CoopEligibility(
    eligibilityID INT AUTO_INCREMENT PRIMARY KEY,
    studentID INT,
    internshipID INT,
    isEligible VARCHAR(3),
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);
CREATE TABLE IF NOT EXISTS CoopSummary(
    studentID INT,
    internshipID INT,
    coopSummary VARCHAR(250) PRIMARY KEY,
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);
CREATE TABLE IF NOT EXISTS CoopGrades(
    studentID INT,
    internshipID INT,
    grade VARCHAR(3),
    FOREIGN KEY (internshipID) REFERENCES Internship(internshipID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
    );
CREATE TABLE IF NOT EXISTS CoopSearch(
    employeeID INT,
    companyID INT,
    facultyID INT,
    departmentID INT,
    FOREIGN KEY (employeeID) REFERENCES Employer(employeeID),
    FOREIGN KEY (facultyID) REFERENCES Faculty(facultyID),
    FOREIGN KEY (companyID) REFERENCES Company(companyID),
    FOREIGN KEY (departmentID) REFERENCES Department(departmentID)
);

INSERT INTO SystemUser VALUES (100, 'johns@umich.edu', 'password123', 'Student');
INSERT INTO SystemUser VALUES (101, 'alexm@umich.edu', 'securepass456', 'Faculty');
INSERT INTO SystemUser VALUES (102, 'annaw@ford.com', 'auto789', 'Employer');
INSERT INTO SystemUser VALUES (103, 'ryank@google.com', 'search101', 'Employer');
INSERT INTO SystemUser VALUES (104, 'Ericw@umich.edu', 'mypassword', 'Faculty');
INSERT INTO SystemUser VALUES (105, 'samt@umich.edu', 'facultypass', 'Faculty');
INSERT INTO SystemUser VALUES (106, 'debbiep@umich.edu', '123456', 'Faculty');
INSERT INTO Employer VALUES (200, 102);
INSERT INTO Employer VALUES (201, 103);
INSERT INTO Company VALUES (300, 'Ford Motor Company', 'Dearborn, MI', 'www.ford.com', 200);
INSERT INTO Company VALUES (301, 'Google LLC', 'Mountain View, CA', 'www.google.com', 201);
INSERT INTO EmployerContact VALUES ('annaw@ford.com', 'Anna Williams', '313-555-1234', 200);
INSERT INTO EmployerContact VALUES ('ryank@google.com', 'Ryan Kim', '714-555-5678', 201);
INSERT INTO Department VALUES (400, 'Computer and Information Science');
INSERT INTO Department VALUES (401, 'Mechanical Engineering');
INSERT INTO Department VALUES (402, 'Electrical and Computer Engineering');
INSERT INTO Department VALUES (403, 'Industrial and Manufacturing Systems Engineering');
INSERT INTO Faculty VALUES (500, 101, 400);
INSERT INTO Faculty VALUES (501, 104, 401);
INSERT INTO Faculty VALUES (502, 105, 402);
INSERT INTO Faculty VALUES (503, 106, 403);
INSERT INTO FacultyContact VALUES ('alexm@umich.edu', 'Alex Martinez', 500);
INSERT INTO FacultyContact VALUES ('Ericw@umich.edu', 'Eric Wilson', 501);
INSERT INTO FacultyContact VALUES ('samt@umich.edu', 'Sam Thompson', 502);
INSERT INTO FacultyContact VALUES ('debbiep@umich.edu', 'Debbie Parker', 503);
INSERT INTO Student VALUES (600, 100, 400, 'http://resume.com/johns');
INSERT INTO StudentContact VALUES ('johns@umich.edu', 'John Smith', 734-555-7890, 600);
INSERT INTO Major VALUES (700, 'Computer Science');
INSERT INTO Major VALUES (701, 'Mechanical Engineering');
INSERT INTO Major VALUES (702, 'Electrical Engineering');
INSERT INTO Major VALUES (703, 'Industrial Engineering');
INSERT INTO StudentStanding VALUES ('Junior', 600, 700, 75, 3.5, 'Fall', 2022, 'No');
INSERT INTO Internship VALUES (800, 200);
INSERT INTO Internship VALUES (801, 201);
INSERT INTO InternshipDescription VALUES (800, 'Software Engineering Intern', 'Work on developing software applications.', 12, 40, 'Dearborn, MI', 'Computer Science, Software Engineering', 2000, 'Open');
INSERT INTO InternshipDescription VALUES (801, 'Mechanical Engineering Intern', 'Assist in mechanical design and testing.', 12, 40, 'Mountain View, CA', 'Mechanical Engineering', 2200, 'Open');
INSERT INTO InternshipMajor VALUES (800, 700);
INSERT INTO InternshipMajor VALUES (801, 701);
INSERT INTO Skills VALUES (900, 'Java, Python', 'C++, SQL');
INSERT INTO Skills VALUES (901, 'CAD, SolidWorks', 'MATLAB, Simulink');
INSERT INTO InternshipSkill VALUES (800, 900);
INSERT INTO InternshipSkill VALUES (801, 901);
INSERT INTO InternshipOffer VALUES (800, 600, 'http://offers.com/johns_offer');
INSERT INTO StudentApplication VALUES (1000, 600, 800, '2023-09-15');
INSERT INTO CoopEligibility VALUES (1100, 600, 800, 'Yes');
INSERT INTO CoopSummary VALUES (600, 800, 'Completed a successful internship at Ford Motor Company, working on software development projects.');
INSERT INTO CoopGrades VALUES (600, 800, 'A');
INSERT INTO CoopSearch VALUES (200, 300, 500, 400);

