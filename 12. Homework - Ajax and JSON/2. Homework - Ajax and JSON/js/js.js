// Homework 2 - Show all albums that have "omnis" in their title


document.getElementById("buttonUsers").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            if (json !== undefined && json.length > 0) {
                document.getElementById("resultOfUsers").innerHTML = (
                    `   
                        <h3>All the albums that have 'omnis' in their title:</h3>
                        <ul>
                            ${json.map((user, index) => {
                                if (user.title.indexOf("omnis") > -1){
                                return (
                                    `
                                        <li key=${index}>
                                            title: ${user.title}<br>
                                            </li><br>
                                    
                                    `
                                )
                            }}).join("")}
                        </ul>
                    
                    `

                )
            }
        })
        .catch(error => {console.log(error);});
})
