// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs



document.getElementById("button").addEventListener("click", function() {

    let inputText = document.getElementById("newText").value;
    let inputFontSize = document.getElementById("fontSize").value;
    let inputColor = document.getElementById("color").value;

    let header1 = document.createElement("h1");
    document.body.appendChild(header1);

    header1.innerHTML = `${inputText}`;
    header1.style.fontSize = `${inputFontSize}px`;
    header1.style.color = `${inputColor}`;


    let message = document.createElement("p");
    document.body.appendChild(message);

    

    if (document.getElementById("fontSize").value  == ""){

        header1.innerHTML = "";
        message.innerHTML = `Please enter a font size number!`;
    } 

    if (document.getElementById("color").value == "") {

        header1.innerHTML = "";
        message.innerHTML = `Please enter a valid color!`;
    } 

    if (document.getElementById("fontSize").value  == "" && document.getElementById("color").value == ""){

        header1.innerHTML = "";
        message.innerHTML = `Please enter a font size number and a valid color!`;
    } 


    document.getElementById("newText").value = '';
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
