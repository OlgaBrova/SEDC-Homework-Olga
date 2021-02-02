$(document).ready(function(){

    //2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

    $("tr:even").css("color", "red");
    $("td:first-child").css("background", "lightgrey");
    $("td:last-child").css("background", "lightgrey");

   
});


