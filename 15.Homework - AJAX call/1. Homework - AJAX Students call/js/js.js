// ## Exercise 1
// Create a button
// When the button is clicked, get the data from a given url with an AJAX call. \
// Print the name of the academy in an **h1** tag. \
// Print all student names in an **unordered list**. \
// **URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
// **NOTE:** You need to parse this data before using it.


$(document).ready(function(){


    function printStudents(responseStudents){

        let h1Element = $(`<h1></h1>`).text(`${responseStudents.academy}`);
        let uList = $(`<ul></ul>`);

        $("body").append(h1Element, uList );

        for(i = 0; i < responseStudents.students.length; i++) {

            uList.append(`<li>${responseStudents.students[i]}</li>`);
        }
    }


    $("button").click(function() {
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",

            success: function(response) {

                let responseStudents = JSON.parse(response);
                printStudents(responseStudents);
            },
            error: function(response){
                console.log("The request has failed!");
            }

        })
    })
    

});