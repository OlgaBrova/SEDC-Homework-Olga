// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs


//Забелешка:
// Задача 1 редоследот на извршување не е добар, ти прво го додаваш елементот во хтмл-от па после проверуваш дали инпутите се валидни би требало да е обратно. Можеш да пробаш да направиш валидација за секој инпут посебно како функција што ќе враќа дали е валидна бојата, фонт сизе валииден (да не дозволиме да пише 100000).

// Korekcija:

let header1 = document.createElement("h1");
document.body.appendChild(header1);

let message = document.createElement("p");
document.body.appendChild(message);


function h1(element1, element2, text) {

    if (text === "") {
        element2.innerHTML = `Please insert text.`;
    } else {
        element1.innerHTML = `${text}`;
    }

}


function fontSize(element1, element2, fontSize) {

    if (fontSize >= 100000) {
        element1.innerHTML = "";
        element2.innerHTML = `Please enter a font size bellow 100000.`;
    } else if (fontSize === "") {
        element1.innerHTML = "";
        element2.innerHTML = `Please enter a font size number!`;
    } else {
        element1.style.fontSize = `${fontSize}px`;
    }
}


function textColor(element1, element2, color) {

    if (color === "" || CSS.supports("color", color) === false) {
        element1.innerHTML = "";
        element2.innerHTML = `Please enter a valid color!`;
    } else {
        element1.style.color = `${color}`;
    }
}


document.getElementById("button").addEventListener("click", function() {

    
    let inputText = document.getElementById("newText").value;
    let inputFontSize = document.getElementById("fontSize").value;
    let inputColor = document.getElementById("color").value;

    h1(header1, message, inputText);
    fontSize(header1, message, inputFontSize);
    textColor(header1, message, inputColor);
  
});
