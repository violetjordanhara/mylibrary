let myLibrary = [];
let container = document.querySelector(`#container`)
//book constructor
function Book(title, author, pages, read){
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
                        document.querySelector('input[name="read"]:checked').value);
    myLibrary.push(addBook);

    console.log(myLibrary);
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
	    libraryCard.setAttribute('data-deleteIndex', currentBook.libraryIndex);
	    container.appendChild(libraryCard);

        let bookTitle = document.createElement('h1');
	    bookTitle.textContent = currentBook.title;
	    libraryCard.appendChild(bookTitle);

        let bookAuthor = document.createElement('div')
        bookAuthor.textContent = `by ${currentBook.author}`;
        libraryCard.appendChild(bookAuthor)

        let bookPages = document.createElement('div')
        bookPages.textContent = `This book has ${currentBook.pages} pages`;
        libraryCard.appendChild(bookPages)

        //button toggles between read and not read
        let bookRead = document.createElement('button')
        bookRead.textContent = currentBook.read;
        libraryCard.appendChild(bookRead)
        bookRead.addEventListener('click', function(event){
            console.log(currentBook.read);
            if (currentBook.read == "already read"){
                console.log("read")
                currentBook.read = "not read" 
                bookRead.textContent = currentBook.read;
            } else if (currentBook.read == "not read"){
                console.log("not read")
                currentBook.read = "already read" 
                bookRead.textContent = currentBook.read;
            }
        })

        

    // add delete button, set attribute to correspond to the library index(i)
	let bookDeleteButton = document.createElement('button');
	bookDeleteButton.innerHTML = 'Delete this book';
	bookDeleteButton.setAttribute('data-buttonDeleteIndex', currentBook.libraryIndex);
	libraryCard.appendChild(bookDeleteButton);


    //add event listener to each button that will check if button's attribute == library card's attribute
    //remove book from DOM and from array
    bookDeleteButton.addEventListener("click", function(){
        if (bookDeleteButton.getAttribute('data-buttonDeleteIndex') == libraryCard.getAttribute('data-deleteIndex')) {
            libraryCard.remove()
            myLibrary.splice(libraryCard.getAttribute('data-deleteIndex'), 1)
        }
    })
    }
    
    
    
    };


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
    let refreshAuthor = document.getElementById("author");
    refreshAuthor.value=" ";
    let refreshTitle = document.getElementById("title");
    refreshTitle.value=" ";
    let refreshPages = document.getElementById("pages");
    refreshPages.value=" ";
}

