// Homework #1
//Change the text of all paragraphs and headers with javascript
//Note:The html must not be changed
let firstHeader = document.getElementById("myTitle");
firstHeader.innerHTML = "Not so cool page anymore.";
console.log(firstHeader);

let paragraph1 = document.querySelector(".paragraph");
paragraph1.innerHTML = "The text in this paragraph is changed!";
console.log(paragraph1);

let div2 = document.querySelector(".anotherDiv");
let paragraph2 = div2.firstElementChild.innerHTML = "This second paragraph's text is also changed.";
console.log(paragraph2);

let text = div2.lastElementChild.innerHTML += " changing their inner text.";
console.log(text);

let div3 = div2.nextElementSibling;
let div3Header1 = div3.firstElementChild.innerHTML = "This is h1 of the last Div.";
console.log(div3Header1);

let div3Header3 = div3.lastElementChild.innerHTML = "This is h3 of the last Div.";
console.log(div3Header3);