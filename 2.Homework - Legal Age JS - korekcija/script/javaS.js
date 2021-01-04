// Legal Age Calculation

let userInput = prompt("When is your birthday? month/day/year"); 

let stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);
let birthday = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let birthdayDay = birthday.getDate();
let birthdayMonth = birthday.getMonth() + 1;
let birthdayFullYear = birthday.getFullYear(); 

let todayDate = new Date();

let todayDateDay = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() + 1;
let todayDateFullYear = todayDate.getFullYear(); 


if (birthdayMonth == todayDateMonth && birthdayDay == todayDateDay && todayDateFullYear - birthdayFullYear >= 18) {
    console.log("Srekjen Rodenden!");
} else if (birthdayMonth == todayDateMonth && birthdayDay == todayDateDay && todayDateFullYear - birthdayFullYear < 18) {
    console.log("Srekjen Rodenden!");
}

if ((todayDateFullYear - birthdayFullYear > 18)  || (todayDateFullYear - birthdayFullYear == 18 && birthdayMonth < todayDateMonth) || 
(todayDateFullYear - birthdayFullYear == 18 && birthdayMonth == todayDateMonth && birthdayDay < todayDateDay) || (birthdayMonth == todayDateMonth && birthdayDay == todayDateDay && todayDateFullYear - birthdayFullYear >= 18)){
    console.log("Polnoleten.");
} 

if ((todayDateFullYear - birthdayFullYear < 18) || (todayDateFullYear - birthdayFullYear == 18 && birthdayMonth > todayDateMonth) || (todayDateFullYear - birthdayFullYear == 18 && birthdayMonth == todayDateMonth && birthdayDay > todayDateDay) || (birthdayMonth == todayDateMonth && birthdayDay == todayDateDay && todayDateFullYear - birthdayFullYear < 18)) {
    console.log("Maloleten.");
} 

