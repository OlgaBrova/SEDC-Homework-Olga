// # Exercise
// ## Create a class Animal that has:
// * name
// * type - carnivore/herbivore/omnivore
// * age
// * size
// * eat - a method that checks if the input is an Animal.

// 	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals

// 	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 

// 	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
// 	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
// * isEaten = default false

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(foodType) {
        if (foodType instanceof Animal ) {

            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);

            } else if(this.type !== "herbivore" && foodType.size >= 2 * this.size) {
                console.log(`The animal ${this.name} tried to eat the ${foodType.name} but it was too large.`);

            }else if (this.type !== "herbivore") {
                foodType.isEaten = true;
                console.log(`The animal ${this.name} ate the ${foodType.name}.`);
            }

        } else {
            console.log(`The animal ${this.name} is eating the ${foodType.name}.`);
        }
    }
}

let giraffe = new Animal("giraffe", "herbivore", 7, 800);
let antelope = new Animal ("antelope", "herbivore", 3, 180);
let lion = new Animal("lion", "carnivore", 10, 200);

giraffe.eat(antelope);            //The animal giraffe is a herbivore and does not eat other animals.
lion.eat(antelope);              //The animal lion ate the antelope.
lion.eat(giraffe);              //The animal lion tried to eat the giraffe but it was too large.

console.log(giraffe);
console.log(lion);
console.log(antelope);



let potato = {
    name: "potato",
    type: "vegetable",
    color: "brown"
}

giraffe.eat(potato);          //The animal giraffe is eating the potato.

