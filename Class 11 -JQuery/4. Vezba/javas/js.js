$(document).ready(function(){
    
    //4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

    $("#content1").show();
    $("#content2").show();
    $("#content3").show();


    $("#current").click(function (){
        
        $("#content1").show();
        $("#content2").hide();
        $("#content3").hide();
        
    });
    

    $("#archived").click(function (){
        
        $("#content2").show();
        $("#content1").hide();
        $("#content3").hide();
        
    });


    $("#upcoming").click(function (){
        
        $("#content3").show();
        $("#content1").hide();
        $("#content2").hide();
        
    });

});


