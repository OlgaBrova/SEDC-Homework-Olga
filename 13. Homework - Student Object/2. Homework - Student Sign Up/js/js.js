// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students


function Student(fName, lName, studentBirthY, studentAcademy) {

    this.firstName = fName;
    this.lastName = lName;
    this.birthYear = studentBirthY;
    this.academy = studentAcademy;

    this.getInfo = function() {
        return `Student: ${this.firstName} ${this.lastName}, ${this.birthYear} - ${this.academy}`;
    }
}


let students = [];

let buttonSignUp = document.getElementById("signUp");
let result = document.getElementById("result");
// let studentsList = document.getElementById("studentsList");
let message = document.getElementById("message");

let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let birthYearInput = document.getElementById("studentBirthY");
let academyInput = document.getElementById("studentAcademy");


buttonSignUp.addEventListener("click", function() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let birthYear = birthYearInput.value;
    let academy = academyInput.value;

    if (!firstName || !lastName || !birthYear || !academy) {
        showMessage("Please enter valid values.", message);
    } else {
        let student = new Student(firstName, lastName, birthYear, academy);
        students.push(student);
        printStudents(students, result);
        clearForm();

        console.log(students);
    }

});


function printStudents(students, element) {
    element.innerHTML = '';

    let html = "";
    for (let i = 0; i < students.length; i++){
        html += `<p>${i + 1}. ${students[i].getInfo()}</p>`;
    }

    element.innerHTML = html;
}


function clearForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    birthYearInput.value = "";
    academyInput.value = "";
}

function showMessage(message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}