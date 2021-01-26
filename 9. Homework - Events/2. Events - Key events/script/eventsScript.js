// Homework - Provide examples and explain what is the difference between keypress, keydown, keyup, change (all of this are triggers)!


// 1. KEYDOWN EVENT
//Keydown event fires when a key is pressed down on the keyboard. While the key is pressed down the event repeats itself. It can be attached to any element, but the event is only sent to the element that has the focus.
// Example:


let input = document.getElementById("textInput");

function anyKey(key){
    let target = key.currentTarget;
    let tag = target.tagName;
    let char = key.char || key.charCode || key.which;
    console.log(char, tag);

    let s = String.fromCharCode(char);
    console.log(s);
}

input.addEventListener("keydown", anyKey, false);

//The fromCharCode() method converts Unicode values into characters. Note: This is a static method of the String object, and the syntax is always String. fromCharCode()




// 2. KEYUP EVENT
//Keyup event fires when a key is released on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus.
// Example:

let input2 = document.getElementById("textInput2");

function anyKey2(key){
    let target = key.currentTarget;
    let tag = target.tagName;
    let char = key.char || key.charCode || key.which;
    console.log(char, tag);

    let s = String.fromCharCode(char);
    console.log(s);
}

input2.addEventListener("keyup", anyKey2, false);




// 3. KEYPRESS EVENT
//Keypress event fires when a key is pressed down on the keyboard. While the key is pressed down the event repeats itself.
// From above definitions, keydown and keypress events seem like the same thing, when acctually they are not exactly the same. The difference is pressing any special, non- printing key (such as CTRL, SHIFT, ALT, DELETE), triggers only keydown events, but not keypress events. This means keypress event is sent to an element when an actual character is being inserted in, such as text input.
// This means you can check letter's uppercase and lowercase Unicode value by pressing Shift + any letter, in the next example.
//Example:

let input3 = document.getElementById("textInput3");

function anyKey3(key){
    let target = key.currentTarget;
    let tag = target.tagName;
    let char = key.char || key.charCode || key.which;
    console.log(char, tag);

    let s = String.fromCharCode(char);
    console.log(s);
}

input3.addEventListener("keypress", anyKey3, false);




// 4. CHANGE EVENT
//Change event is sent to an element (fires) when it's value changes. This event is limited to <input> element , <select> element and <textarea> boxes. For select boxes, checkboxes and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is postponed until the element loses focus. The change event occurs when the element has completed changing.
//Example:

let input4 = document.getElementById("textInput4");

function enterText(){
    input4.value = input4.value.toUpperCase();
    input4.style.background = "salmon";
}

input4.addEventListener("change", enterText, false);