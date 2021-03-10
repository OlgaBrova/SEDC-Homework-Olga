//## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console

// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property


// ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject


function Academy (name, students, subjects, startDate, endDate) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = new Date(startDate);
    this.end = new Date(endDate);
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = function() {
        this.students.forEach(student => console.log(student));
    };

    this.printSubjects = function() {
        for (let i = 0; i < this.subjects.length; i++) {
            console.log(`${i + 1}.${subjects[i]}`);
        }  
    };
}

let academy1 = new Academy("SEDC", ["Olga Penovska", "Elena Mihajlova", "Milka Durlevic"], ["Math", "English", "Html&CSS", "JavaScript"], "2021, 10", "2022, 10");
//console.log(academy1);
//console.log(academy1.numberOfClasses);
//console.log(academy1.printStudents());
//console.log(academy1.printSubjects());



function Subject (title, isElective, academyObj, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academyObj;
    this.students = students;

    this.overrideClasses = function(number) {
    
        if(number < 3){
            console.log("Number of classes must be above 3!");
        } else {
            this.numberOfClasses = number;
        }
    }
}

let subject1 = new Subject("Math", false, academy1, []);
//console.log(subject1.overrideClasses(8));
//console.log(subject1);



function Student(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function (academyObj) {
        this.academy = academyObj;
        academyObj.students.push(`${this.firstName} ${this.lastName}`);
    };
   

    this.startSubject = function(subjectObj) {               
        
        if (this.academy) {
            
            let hasSubject = this.academy.subjects.filter(sub => sub === subjectObj.title).length > 0;
            if (hasSubject) {
                subjectObj.students.push(this.firstName);
                if (!this.currentSubject) {
                    this.currentSubject = subjectObj;
                    return;
                }

                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = subjectObj;
            }
        } else {
            throw new Error("That subject does not exists in the current accademy!");
        }
  
    }

}


let student1 = new Student("Aleksandar", "Shapka", 33);
student1.startAcademy(academy1);
//console.log(academy1.students);

student1.startSubject(subject1);
               // Adds Math to currentSubject, since it exists in academy1 (academy object) and to completes subj

let subject2 = new Subject("Geometry", true, academy1, []);
student1.startSubject(subject2);        // Doesn't add Geometry to currentSubject, because it does not exist in Academy object
      

let subject3 = new Subject("Html&CSS", true, academy1, []);
student1.startSubject(subject3);        //  Adds Html&CSS to currentSubject, since it exists in academy1 (academy object) and to completes subj

let subject4 = new Subject("JavaScript", true, academy1, []);
student1.startSubject(subject4);        // Adds JavaScript to currentSubject since it exists in academy1 (academy object)
console.log(student1);