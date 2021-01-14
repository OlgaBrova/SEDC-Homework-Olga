function detectDataType(a){
    let dataType= typeof a; 
    return dataType;
}

console.log(`The parameter type is ${detectDataType(new Boolean(true))}.`);
console.log(`The parameter type is ${detectDataType(false)}.`);
console.log(`The parameter type is ${detectDataType(52)}.`);
console.log(`The parameter type is ${detectDataType("Smith")}.`);
console.log(`The parameter type is ${detectDataType()}.`);