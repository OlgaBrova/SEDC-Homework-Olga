$(document).ready(function(){

    //1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.

    
    $("button").click(function (){
        
        let inputNaslov = $("#naslov").val();
        let inputAvtor = $("#avtor").val();
        let inputTelefon = $("#telefon").val();
        let inputDate = $("#date").val();
       
        
        $("ul").append(`<h3>Result:</h3>
                    <li>Naslov na knigata: ${inputNaslov}</li><br>
                    <li>Avtor na knigata: ${inputAvtor}</li><br>
                    <li>Telefon: ${inputTelefon}</li><br>
                    <li>Datum: ${inputDate}</li><br><br><br>`);

    });

});


