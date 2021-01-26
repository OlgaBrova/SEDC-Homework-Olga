// Homework - CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)

let button = document.getElementById("submit");

function createTable(){
    let rowInput = document.getElementById("rows").value;
    let columnInput = document.getElementById("columns").value;  

    for(let r = 0; r < Number(rowInput, 10); r++){
    let row = document.getElementById("createTable").insertRow(r);
    
    for(let c = 0; c < Number(columnInput, 10); c++){
        let column = row.insertCell(c);
        column.innerHTML="Row-" +r + " Column-" +c; 
        }
    }
}

button.addEventListener("click", createTable, false);









// For homework provide examples and explain what is the difference between keypress, keydown, keyup, change (all of this are triggers)!

// For homework provide examples and explain what is the difference betwenn mouseover, mouseout and mouseleave (all of this are triggers)!



