// ## Exercise 1
// Create a Person constructor function that has:
// * firstName
// * lastName
// * age
// * getFullName - method

// Create a Student constructor function that inherits from Person and has:
// * academyName
// * studentId
// * study - method that writes in the console: The student firstName is studying in the academyName

// Create two Student objects


function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function() {
        console.log(`The student ${this.firstName} is studing in ${this.academyName}.`);
    }

}

let student1 = new Student("Olga", "Penovska", 33, "SEDC Academy", 99);
let student2 = new Student("Elena", "Mihajlova", 25, "SEDC Academy", 52);

// console.log(student1);
// student1.getFullName();
// student1.study();

// console.log(student2);
// student2.getFullName();
// student2.study();



// ## Exercise 2
// Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
// #### DesignStudent
// * isStudentOfTheMonth - boolean
// * attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// #### CodeStudent
// * hasIndividualProject - boolean
// * hasGroupProject - boolean
// * doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// #### NetworkStudent
// * academyPart - number
// * attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// **Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students
// Check all students with the Student method for checking students academy


// Method on the Student prototype:
Student.prototype.showAcademy = function() {
    console.log(`${this.academyName}`);
}                                                        // Ovde mi ja dava greshkata, deka showAcademy ne e funkcija


function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.isStudentOfTheMonth = isStudentOfTheMonth; //boolean

    this.attendAdobeExam = function() {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

let studentDesign1 = new DesignStudent("Ivan", "Shterjov", 25, "SEDC - Academy for Design", 133, false);
studentDesign1.attendAdobeExam();
console.log(studentDesign1);
studentDesign1.showAcademy();                      ///Ovde ja povikuvam funkcijata za ovoj objekt



function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.hasIndividualProject = hasIndividualProject;   //boolean
    this.hasGroupProject = hasGroupProject;             // boolean

    this.doProject = function(type) {

        if (type === "individual") {
            console.log(`The student ${this.firstName} ${this.lastName} is working on ${type} project.`);
            this.hasIndividualProject = true;
            this.hasGroupProject = false;
        } else if (type === "group") {
            console.log(`The student ${this.firstName} ${this.lastName} is working on ${type} project.`);
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        }
    }
}

let studentCode1 = new CodeStudent("Marija", "Penovska", 22, "SEDC - Academy for Coding", 98);
studentCode1.doProject("individual");
console.log(studentCode1);



function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.academyPart = academyPart;

    this.attendCiscoExam = function() {
        console.log(`The student ${this.firstName} is doing a cisco exam!`);
    }
}

let studentNetwork1 = new NetworkStudent("Nevena", "Jovanova", 21, "SEDC - Network Academy", 56, 2);
studentNetwork1.attendCiscoExam();
console.log(studentNetwork1);