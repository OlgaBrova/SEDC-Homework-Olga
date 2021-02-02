$(document).ready(function(){

    //3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

    
    $("#starting").click(function (){
        
        $("p").css("font-size", "16px");
       
    });


    $("#increase").click(function (){
        
        $("p").css("font-size", "32px");

    });

    $("#reduce").click(function (){
        
        $("p").css("font-size", "6px");
    
    });

});


