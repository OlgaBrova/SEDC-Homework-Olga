// Homework - Provide examples and explain what is the difference between mouseover, mouseout and mouseleave (all of this are triggers)!

// 1. MOUSEOVER EVENT
// Mouseover event fires when the mouse pointer is moved onto an element, or onto one of its children. This event is often used together with the mouseout event.
// Example:
// Console.log vo funkciite e postaveno samo za da se vidi vo console koja e razlikata pomegju mouseout i mouseleave od eden element na drug, bidejkji ovaa razlika ne se gleda na ekran.

let button1 = document.getElementById("mouseOver");

function mouseOver1(){
    button1.style.background = "skyblue";
    button1.style.color = "yellow";
    button1.style.borderRadius = "25px";
    console.log("mouseover button 1");
}

button1.addEventListener("mouseover", mouseOver1, false);



// 2. MOUSEOUT EVENT
// Mouseout event fires when the mouse pointer is no longer contained within the element or one of its children. Mouseout is also delivered to an element if the mouse pointer enters a child element, because the child element obscures the visible area of the element.
// Example:

function mouseOut(){
    button1.style.background = "salmon";
    button1.style.color = "black";
    button1.style.borderRadius = "6px";
    console.log("mouseout button 1");
}

button1.addEventListener("mouseout", mouseOut, false);




let div1 = document.getElementById("mouseOverOut");

function mouseOverDiv(){
    div1.style.background = "lightgreen";
    console.log("mouseover div 1");
}

div1.addEventListener("mouseover", mouseOverDiv);

function mouseOutDiv1(){
    div1.style.background = "lightblue";
    console.log("mouseout div 1");
}

div1.addEventListener("mouseout", mouseOutDiv1);




// 3. MOUSELEAVE EVENT
// Mouseleave event is fired at an element when the mouse pointer is moved out of it.
//Mouseleave and mouseout are similar but differ in that mouseleave does not bubble and mouseout does. This means that mouseleave is fired when the pointer has exited the element and all of its descendants, whereas mouseout is fired when the pointer leaves the element or leaves one of the element's descendants.
// Example:

let button2 = document.getElementById("mouseLeave");

function mouseOver2(){
    button2.style.background = "skyblue";
    button2.style.color = "yellow";
    button2.style.borderRadius = "25px";
    console.log("mouseover button 2");
}

button2.addEventListener("mouseover", mouseOver2, false);


function mouseLeave(){
    button2.style.background = "salmon";
    button2.style.color = "black";
    button2.style.borderRadius = "6px";
    console.log("mouseleave button 2");
}

button2.addEventListener("mouseleave", mouseLeave, false);




let div2 = document.getElementById("mouseOverLeave");

function mouseOverDiv2(){
    div2.style.background = "lightgreen";
    console.log("mouseover div 2");
}

div2.addEventListener("mouseover", mouseOverDiv2);

function mouseLeaveDiv(){
    div2.style.background = "lightblue";
    console.log("mouseleave div 2");
}

div2.addEventListener("mouseleave", mouseLeaveDiv);



// Console.log vo funkciite e postaveno samo za da se vidi vo console koja e razlikata pomegju mouseout i mouseleave od eden element na drug, bidejkji ovaa razlika ne se gleda na ekran zatoa shto dvete ja vrshat istata funkcija so toa shto mouseout pravi takanareceno event bubbling dodeka mouseleave ne.