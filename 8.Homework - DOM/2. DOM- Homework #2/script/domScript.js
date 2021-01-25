// Homework #2 - Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)



let numbersArray = [12, 32, 95, 157, 654, 88, 125, 337, 550, 875, 75];

let sum = numbersArray.reduce(function(a, b){
    return a + b;
}, 0);


let divElement = document.createElement("div");
divElement.innerHTML = "<h2>This is a numbers list:</h2>";
document.body.appendChild(divElement);

let list = document.createElement("ul");
divElement.appendChild(list);

list.innerHTML = "";
for(i = 0; i < numbersArray.length; i++){
    list.innerHTML += `<li>${numbersArray[i]}</li>`;
}

let header2 = document.createElement("h3");
divElement.appendChild(header2);
header2.innerText = `The sum of all the numbers on the list is : ${sum}.`;

let header3 = document.createElement("h3");
divElement.appendChild(header3);
header3.innerText = `The mathematical equasion to get the sum of the numbers is:  `;

for(let i = 0; i < numbersArray.length; i++){
    if (i < numbersArray.length - 1){
        header3.innerHTML += `${numbersArray[i]}` + "+";
    } else {
        header3.innerHTML += `${numbersArray[i]}` + " ";
    }
}

header3.innerHTML += ` = ${sum}`;