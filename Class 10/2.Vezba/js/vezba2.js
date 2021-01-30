//2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts



// Ovde pocnav so prompt, pa button pa izbrsisav i pak pocnav so prompt i epten zaglaviv. Nema ni shto da se gleda tuka. Pozdrav

let accountMoney = 300000;
let input = prompt("Enter the amount of money you wish to deposit:");
let inputDeposit = Number(input);

function deposit(accountMoney, inputDeposit){
    return accountMoney + inputDeposit;
}

console.log(deposit(accountMoney, inputDeposit));



let input1 = prompt("Enter the amount of money you wish to withdraw:");
let inputWithdrawal = Number(input1);

function withdrawal(accountMoney, inputWithdrawal){
    return accountMoney - inputWithdrawal;
}

console.log(deposit(accountMoney, inputWithdrawal));









let buttonDeposit = document.getElementById("deposit");
buttonDeposit.addEventListener("click", deposit(accountMoney, inputDeposit));





















//Vezba 3

// 1. 2 froms for login and register, one button for logout and one div which will have all users
// 2. Declaration and initialization of global variables (arraysOfAllUsers, currentUser)
// 3. events for each button (login, register, logout) and function
// 4. create function constructor User
// 5. Register: get the inpit or radio button value and check if they are empty or password less than 6 characters or username is less than 3 characters. If statment is correct, creat the user like let newUser = new User(username, password, isAdmin); Once it is created add it to the array.
// 6. Login: check if the two input fields values are empty? if not, check if there is username in the arrayOfAllUsers and if the password for that user is same with the password in the input field value. Once it is found currentUser should be the user that is found.
// 7. Logout: if currentUser !== null, than currentUser = {}
// 8. check if currentUser is admin and if it is admin show all users from arrayOfAllUsers in the div