// ## Exercise 2
// Create a button
// When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:
// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1 \
// **NOTE:** JQuery will autmatically parse this call (js will not).


$(document).ready(function(){

   
    $("button").click(function() {

        fetch("https://swapi.dev/api/people/1")
            .then(function (response) {
                return response.json();
            })
            .then (function (data) {

                let h1Element = $(`<h1></h1>`).text(`${data.name}`);
                $("button").after(h1Element);
    
                $("#dataSW").html(`
                <tr>
                    <td>Height</td>
                    <td>Weight</td>
                    <td>Eye color</td>
                    <td>Hair color</td>
                </tr>
                
                <tr>
                    <td>${data.height}</td>
                    <td>${data.mass}</td>
                    <td>${data.eye_color}</td>
                    <td>${data.hair_color}</td>
                </tr>`);


            }).catch(function (error) {
                alert("ERROR");
            });
            
    })
 
});