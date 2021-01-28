// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs


let inputName = prompt("What is your pet's name?");
let inputKind = prompt("What kind of pet is it?");

function CreateAnimal(inputName, inputKind){
    this.name = inputName;
    this.kind = inputKind;
    this.speak = function (){
        console.log(`Your ${this.kind} says: 'Hey beautifull!'`);
    }
} 

let animal = new CreateAnimal(inputName, inputKind);
animal.speak();