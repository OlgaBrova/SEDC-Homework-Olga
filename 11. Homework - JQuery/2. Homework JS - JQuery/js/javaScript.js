// HOMEWORK PART 2 - Create a header generator
// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// Create an h3 element for messages
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// If the person enters an invalid color or an empty text show an error message to the message element


$(document).ready(function(){


    // Prv nacin (razlikata megju prviot i vtoriot e samo vo uslovot validacija na boja koja se vnesuva vo input):

    $("button").click(function (){
        
        let inputText = $("#inputText").val();
        let inputColor = $("#inputColor").val();
        
        $("button").after(`<h1>${inputText}</h1>`);
        let h1Text = $("h1");
        h1Text.css("color", inputColor);

        let h3Message = $("#message");


        function isColor(inputColor){
            let option = new Option().css;
            option.color = inputColor;
            return option.color == inputColor;
        }

        if (inputColor == "" || isColor(inputColor) == false){
            h1Text.empty();
            h3Message.text("ERROR");
        } 

    });


    
    // Vtor nacin :


    // $("button").click(function (){

    //     let inputText = $("#inputText").val();
    //     let inputColor = $("#inputColor").val();
        
    //     $("button").after(`<h1>${inputText}</h1>`);
    //     let h1Text = $("h1");
    //     h1Text.css("color", inputColor);

    //     let h3Message = $("#message");

    //     if (inputColor == "" || CSS.supports("color", inputColor) === false){
    //         h1Text.empty();
    //         h3Message.text("ERROR");
    //     } 

    // });

   
});