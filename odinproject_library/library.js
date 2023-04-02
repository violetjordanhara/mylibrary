/* All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) that can take user’s input and 
store the new book objects into an array. Your code should look something like this:
let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}*/

let myLibrary = [];

//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//prompt user for each property, add it to myLibrary
function addBookToLibrary() {
   let addBook = new Book(prompt("Title of new book"), prompt("Author of new book"),prompt("Page count of new book"),prompt("Read?"))
    myLibrary.push(addBook);
    console.log(myLibrary)
};
addBookToLibrary()

/*Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display. */

//three sample books to add to array
const bookOne = {
    title: "The Waves", 
    author: "Virginia Woolf", 
    pages: 300, 
    read: "read"
}
const bookTwo ={
    title:"Do Androids Dream of Electric Sheep", 
    author:"Philip K. Dick", 
    pages: 300, 
    read: "read"
}
const bookThree = {
    title: "The Sound of Waves", 
    author: "Yukio Mishima", 
    pages: 300, 
    read: "not read"
}
myLibrary.push(bookOne, bookTwo, bookThree)
console.log(myLibrary)
//function that loops through array and inputs each item to the table
function bookDisplay(){
    for (let i=0; i<myLibrary.length;i++){
        var table = document.getElementById("books");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = `${myLibrary[i].title}`;
        cell2.innerHTML = `${myLibrary[i].author}`;
        cell3.innerHTML = `${myLibrary[i].pages}`;
        cell4.innerHTML = `${myLibrary[i].read}`;
    }
}
bookDisplay();
/*
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want. 
You will most likely encounter an issue where submitting your form will not do what you expect it to do. 
That’s because the submit input tries to send the data to a server by default. 
If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. 
Read up on the event.preventDefault documentation again and see how you can solve this issue!
*/

//function displays the form on clicking the "new book" button
function makeForm(){
    var x = document.getElementById("bookForm");
    x.style.display = "block";
}

function manageSubmit(){
    event.preventDefault();
}
