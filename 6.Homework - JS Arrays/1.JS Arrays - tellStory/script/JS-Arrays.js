// Array homework #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// The value that is returned from the function should be printed in the console or in alert

let story = ['Elena', 'annoyed', 'ate'];

function tellStory(name, mood, activity) {
    let result = `A little girl named ${name} was very ${mood} once she found out that a dog ${activity} her cookies.`;
    return result;
}

console.log(tellStory(...story));               // Example 1

alert(tellStory('Marija', 'happy', 'left'));    // Example 2

