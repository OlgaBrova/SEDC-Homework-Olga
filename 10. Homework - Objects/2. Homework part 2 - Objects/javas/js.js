// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let inputTitle = prompt("Enter a book title:");
let inputAuthor = prompt("Enter the author of the book:");
let inputStatus = prompt("Enter 'true' if you've read the book or enter 'false' if you heaven't read it.");

function BookObject(inputTitle, inputAuthor, inputStatus){
    this.title = inputTitle;
    this.author = inputAuthor;
    this.readingStatus = inputStatus;
    this.bookReadStatus = function (){
        if (this.readingStatus == 'true'){
            console.log(`Already read '${this.title}' by ${this.author}.`);
        } else if(this.readingStatus == 'false'){
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
        }
    }
} 


let book = new BookObject(inputTitle, inputAuthor, inputStatus);
book.bookReadStatus();