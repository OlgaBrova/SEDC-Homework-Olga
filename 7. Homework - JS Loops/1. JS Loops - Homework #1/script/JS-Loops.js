//Homework #1 
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it

let stringsArray = ["No", "New", "Year's", "resolution", "for", "2021", "."];

function sentence(){
    let result = (`"${stringsArray.join(' ')}"`);
    return result;
}
console.log(sentence());

