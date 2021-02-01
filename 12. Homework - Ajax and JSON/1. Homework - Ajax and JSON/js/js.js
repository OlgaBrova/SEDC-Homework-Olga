// Homework 1 - Return and print every property with their values from 23 post


document.getElementById("buttonUsers").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            if (json !== undefined && json.length > 0) {
                document.getElementById("resultOfUsers").innerHTML = (
                    `
                        <h3>Post number 23:</h3>  
                        <ul>
                            ${json.map((user, index) => {
                                if (user.id == "23"){
                                return (
                                    `
                                        <li key=${index}>
                                            userId: ${user.userId}<br>
                                            id: ${user.id}<br>
                                            title: ${user.title}<br>
                                            body: ${user.body}<br>
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
