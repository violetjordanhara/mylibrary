let myLibrary = [];
let container = document.querySelector(`#container`)
//book constructor
function Book(title, author, pages, read, libraryIndex){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.libraryIndex = 0
}
//take input from form, add new book to myLibrary, add it to the table
function addBookToLibrary() {
   let addBook = new Book(document.getElementById('title').value, 
                        document.getElementById('author').value,
                        document.getElementById('pages').value,
                        document.getElementById('read').value);
    myLibrary.push(addBook);

    console.log(myLibrary)
    createBookDisplay()
};

//function that loops through array and inputs each item to DOM
function createBookDisplay(){
//clear previous entries
    container.replaceChildren();
    for (let i=0; i<myLibrary.length;i++){
        //give it a library index to have attributes corresponding to dom
        let currentBook = myLibrary[i];
	    currentBook.libraryIndex = i;

        let libraryCard = document.createElement('div');
	    libraryCard.classList.add(`libraryCard`);
	    libraryCard.setAttribute(`data-deleteIndex`, currentBook.libraryIndex);
	    container.appendChild(libraryCard);

        let bookTitle = document.createElement('h1');
	    bookTitle.textContent = currentBook.title;
	    libraryCard.appendChild(bookTitle);

        let bookAuthor = document.createElement('div')
        bookAuthor.textContent = currentBook.author;
        libraryCard.appendChild(bookAuthor)

        let bookPages = document.createElement('div')
        bookPages.textContent = currentBook.pages;
        libraryCard.appendChild(bookPages)

        let bookRead = document.createElement('div')
        bookRead.textContent = currentBook.read;
        libraryCard.appendChild(bookRead)
    
    // add delete button, set attribute to correspond to the library index(i)
	let bookDeleteButton = document.createElement(`button`);
	bookDeleteButton.innerHTML = `Delete this book`;
	bookDeleteButton.id = `deleteBook`;
	bookDeleteButton.setAttribute(`data-buttonDeleteIndex`, currentBook.libraryIndex);
	libraryCard.appendChild(bookDeleteButton);
    }
    
}
createBookDisplay();


//function displays the form on clicking the "new book" button
function makeForm(){
    var x = document.getElementById("bookForm");
    x.style.display = "block";
}
//takes user input, adds new object in array. page refreshes and array is looped over
function manageSubmit(){
    event.preventDefault();
    addBookToLibrary();
   
}

/*Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. 
One easy solution is giving them a data-attribute that corresponds to the index of the library array. */
//create buttons for each row

function resetLibraryDisplay() {
    for (i = 0; i < myLibrary.length; i++) {
        let libraryCards = container.querySelectorAll('div');
    
        libraryCards.forEach(libraryCard => { 
			libraryCard.remove();
    });
    }
}


function deleteBook(indexToDelete) {
    let libraryCards = container.querySelectorAll('div');
    libraryCards.forEach(libraryCard => { 
		if (indexToDelete === libraryCard.getAttribute(`data-deleteIndex`)) {
			this.libraryCard.remove();
		}
    });
	
	resetLibraryDisplay();
	console.log({myLibrary});
	myLibrary.splice(indexToDelete, 1);
	console.log({myLibrary});
	createBookDisplay();
}
