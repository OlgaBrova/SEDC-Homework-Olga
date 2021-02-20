// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json



// 1. Reshenie bez AJAX call ( so eksteren script file so students niza)


// //All students with an average grade higher than 3

// let studentsAverageGradeHigherThen3 = students.filter(student => student.averageGrade > 3);
// console.log(studentsAverageGradeHigherThen3);


// // All female student names with an average grade of 5

// let femaleStudentsAverageGrade5 = students
//     .filter(student => student.gender === "Female")
//     .filter(student => student.averageGrade === 5);

// console.log(femaleStudentsAverageGrade5);



// // All male student full names who live in Skopje and are over 18 years old

// let maleStudentsSkopje = students
//     .filter(student => student.gender === "Male")
//     .filter(city => city.city === "Skopje")
//     .filter(age => age.age > 18);

// maleStudentsSkopje.forEach(student => console.log(`${student.firstName} ${student.lastName}`));



// // The average grades of all female students over the age  of 24

// let femaleOver24AverageGrade = students
//     .filter(student => student.gender === "Female")
//     .filter(age => age.age > 24);

// femaleOver24AverageGrade.map(student => 
//     console.log(`${student.firstName} ${student.lastName}: average grade (${student.averageGrade})`));


// // All male students with a name starting with B and average grade over 2

// let maleNameBGradeOver2 = students
//     .filter(student => student.gender === "Male")
//     .filter(grade => grade.averageGrade > 2)
//     .filter(name => name.firstName.startsWith("B"));


// maleNameBGradeOver2.map(student => 
//     console.log(`${student.firstName} ${student.lastName}: average grade (${student.averageGrade})`));






// 2. Reshenie so AJAX call 

$(document).ready(function(){

    
    $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",

        success: function(response) {

            let responseStudents = JSON.parse(response);
            useReturnData(responseStudents);

            students1 (responseStudents);
            students2 (responseStudents);
            students3 (responseStudents);
            students4 (responseStudents);
            students5 (responseStudents);
            
        
        },
        error: function(response){
            console.log("The request has failed!");
        }

    });

});   
    

function useReturnData(responseStudents) {
    
    let allStudents = responseStudents;
    //console.log(allStudents);
}



// All students with an average grade higher than 3

function students1 (responseStudents) {

    let ajaxStudentsAverageGradeHigherThen3 = responseStudents.filter(student => student.averageGrade > 3);

    console.log(ajaxStudentsAverageGradeHigherThen3);
}



// All female student names with an average grade of 5

function students2 (responseStudents) {

    let ajaxFemaleStudentsAverageGrade5 = responseStudents
        .filter(student => student.gender === "Female")
        .filter(student => student.averageGrade === 5);

    console.log(ajaxFemaleStudentsAverageGrade5);
}



// All male student full names who live in Skopje and are over 18 years old

function students3 (responseStudents) {

    let ajaxMaleStudentsSkopje = responseStudents
        .filter(student => student.gender === "Male")
        .filter(city => city.city === "Skopje")
        .filter(age => age.age > 18);

    ajaxMaleStudentsSkopje.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
}



// The average grades of all female students over the age  of 24

function students4 (responseStudents) {

    let ajaxFemaleOver24AverageGrade = responseStudents
        .filter(student => student.gender === "Female")
        .filter(age => age.age > 24);

    ajaxFemaleOver24AverageGrade.map(student => 
        console.log(`${student.firstName} ${student.lastName}: average grade (${student.averageGrade})`));
}



// All male students with a name starting with B and average grade over 2

function students5 (responseStudents) {

    let ajaxMaleNameBGradeOver2 = responseStudents
        .filter(student => student.gender === "Male")
        .filter(grade => grade.averageGrade > 2)
        .filter(name => name.firstName.startsWith("B"));


    ajaxMaleNameBGradeOver2.map(student => 
        console.log(`${student.firstName} ${student.lastName}: average grade (${student.averageGrade})`));
}













 












