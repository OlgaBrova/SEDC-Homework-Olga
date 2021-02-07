// ## Student constructor function
// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students


function Student(fName, lName, studentBirthY, studentAcademy, studentGrades) {
    this.firstName = fName;
    this.lastName = lName;
    this.birthYear = studentBirthY;
    this.academy = studentAcademy;
    this.grades = studentGrades;


    this.getAge = function() {
        let currentYear = new Date().getFullYear();
        let age = currentYear - this.birthYear;
        return `Age: ${age}.`;
    }


    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    }


    this.getGradesAverage = function() {

        let sum = 0;
        for (let i = 0; i < this.grades.length; i++){
            sum += parseInt(this.grades[i], 10);
        }

        let average = sum/this.grades.length;
        let averageGrade = average.toFixed(2);

        return `Average grade: ${averageGrade}.`;
    }
}

let students = [];


let student1 = new Student("Olga", "Penovska", 1987, "SEDC", [4, 3, 3, 5, 2, 4]);
students.push(student1);

let student2 = new Student("Elena", "Mihajlova", 1986, "SEDC", [5, 4, 3, 5, 3, 5]);
students.push(student2);

let student3 = new Student("Aleksandar", "Shterjov", 1990, "SEDC", [5, 4, 2, 5, 5, 3]);
students.push(student3);


console.log(students);

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}.${students[i].getInfo()} \n  ${students[i].getAge()} \n  ${students[i].getGradesAverage()}`);
}
