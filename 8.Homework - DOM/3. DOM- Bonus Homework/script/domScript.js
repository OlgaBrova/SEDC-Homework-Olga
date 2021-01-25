// Bonus Homework #2 - Create a recipe page from inputs
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy



let inputName = prompt("What is the name of the recipe?");
let inputNumberIngredients = prompt("How many ingredients do we need for the recipe?");

let ingredientsArray = [];
let size = inputNumberIngredients;

for(let i=0; i<size; i++) {
	
	ingredientsArray[i] = prompt("Enter every ingredient with the amount needed for the recipe:" + (i+1));
}

let divElement = document.createElement("div");
divElement.innerHTML = `<h2> ${inputName}</h2>`;
document.body.appendChild(divElement);

let listIngredients = document.createElement("ul");
divElement.appendChild(listIngredients);

listIngredients.innerHTML = "";
for(i = 0; i < ingredientsArray.length; i++){
    listIngredients.innerHTML += `<li>${ingredientsArray[i]}</li>`;
}