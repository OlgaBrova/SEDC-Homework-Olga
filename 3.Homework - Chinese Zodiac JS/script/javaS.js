// Chinese Zodiac Sign


let userInput = prompt("To find out which Chinese zodiac sign you are, enter your birth year.");
let birthYear = parseInt(userInput);

let chineseZodiac = (birthYear - 4) % 12;
console.log(chineseZodiac);


if (chineseZodiac == 0){
    console.log("Your Chinese zodiac sign is Rat.");
}

if (chineseZodiac == 1){
    console.log("Your Chinese zodiac sign is Ox.");
}

if (chineseZodiac == 2){
    console.log("Your Chinese zodiac sign is Tiger.");
}

if (chineseZodiac == 3){
    console.log("Your Chinese zodiac sign is Rabbit.");
}

if (chineseZodiac == 4){
    console.log("Your Chinese zodiac sign is Dragon.");
}

if (chineseZodiac == 5){
    console.log("Your Chinese zodiac sign is Snake.");
}

if (chineseZodiac == 6){
    console.log("Your Chinese zodiac sign is Horse.");
}

if (chineseZodiac == 7){
    console.log("Your Chinese zodiac sign is Goat.");
}

if (chineseZodiac == 8){
    console.log("Your Chinese zodiac sign is Monkey.");
}

if (chineseZodiac == 9){
    console.log("Your Chinese zodiac sign is Rooster.");
}

if (chineseZodiac == 10){
    console.log("Your Chinese zodiac sign is Dog.");
}

if (chineseZodiac == 11){
    console.log("Your Chinese zodiac sign is Pig.");
}