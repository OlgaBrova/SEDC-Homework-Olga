// HOMEWORK PART 1 - CREATE A GREETING APP WITH JQUERY
// Create an input, create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

$(document).ready(function(){

    $("button").click(function(){
        let input = $("input").val();
        $("h1").text(`Hello there ${input} !`);
        $("h1").show();
    });
   
});