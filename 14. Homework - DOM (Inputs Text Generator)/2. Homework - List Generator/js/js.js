// ## List Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Items
// * Create a button for generating unordered lists
// * When the button is clicked generate a new ul element with the color, font size and items from the inputs 
// > Items should be added separated by , in the input


document.getElementById("button").addEventListener("click", function() {

    let inputCities = document.getElementById("cities").value;
    let inputFontSize = document.getElementById("fontSize").value;
    let inputColor = document.getElementById("color").value;
   
    let uList = document.createElement("ul");
    document.body.appendChild(uList);
    uList.innerHTML = "";
    uList.innerHTML += `<h3>A list of famous European cities: </h3>`;


    let citiesArray = inputCities.split(',');
 
    for(i = 0; i < citiesArray.length; i++){

        uList.innerHTML += `<li>${citiesArray[i]}</li>`;
    }

    uList.style.fontSize = `${inputFontSize}px`;
    uList.style.color = `${inputColor}`;

  

    let message = document.createElement("p");
    document.body.appendChild(message);


    if (document.getElementById("fontSize").value  == ""){

        uList.innerHTML = "";
        message.innerHTML = `Please enter a font size number!`;
    } 

    if (document.getElementById("color").value == "") {

        uList.innerHTML = "";
        message.innerHTML = `Please enter a valid color!`;
    } 

    if (document.getElementById("fontSize").value  == "" && document.getElementById("color").value == ""){

        uList.innerHTML = "";
        message.innerHTML = `Please enter a font size number and a valid color!`;
    } 

    document.getElementById("cities").value = '';
    document.getElementById("fontSize").value = '';
    document.getElementById("color").value = '';

}, false);










    




// $("button").click(function (){

//     let inputText = $("#inputText").val();
//     let inputColor = $("#inputColor").val();
    
//     $("button").after(`<h1>${inputText}</h1>`);
//     let h1Text = $("h1");
//     h1Text.css("color", inputColor);

//     let h3Message = $("#message");

//     if (inputColor == "" || CSS.supports("color", inputColor) === false){
//         h1Text.empty();
//         h3Message.text("ERROR");
//     } 

// });
