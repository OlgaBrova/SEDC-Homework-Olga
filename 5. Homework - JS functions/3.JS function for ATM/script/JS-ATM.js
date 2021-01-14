let userInput = prompt("Enter the ammount of money you wish to withdraw:");
let withdrawnMoney = Number(userInput);
let b = withdrawnMoney;

let accountMoney = 95000;
let a = accountMoney;

function leftMoney(a, b){
    let result = (a - b);
    return result;
}

if(withdrawnMoney > accountMoney){
    console.log(`Not enough money.`);
} else if(withdrawnMoney <= accountMoney){
    console.log(`Withdrawn ammount of money is ${withdrawnMoney} denars. Money left on the account is ${leftMoney(a, b)} denars.`);
} else{
    console.log(`ERROR`);
}