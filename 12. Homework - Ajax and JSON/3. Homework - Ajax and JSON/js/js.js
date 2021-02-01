// Homework 3 - Create new user

document.getElementById("createUser").addEventListener("click", function(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log("User Id", userId);
    // console.log("Title", title);
    // console.log("Body", body);

    function createUser(fullName, email, password) {
        if (fullName !== "" && email !== "" && password !== ""){
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }

            })
            .then(response => response.json())
            .then(convertedResponseToJson => console.log("Successfully created new user", convertedResponseToJson))
            .catch(err => console.log(err));
        }
    }

    createUser(fullName, email, password)
})