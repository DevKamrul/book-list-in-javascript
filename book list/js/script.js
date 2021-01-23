//get the UI element
let form = document.querySelector('#book_form');
let booklist = document.querySelector('#book-list')


// book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class
class UI {
    static addToBookList(book) {
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML =
            `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> <a href="#" class="delete">x</a></td>`;
        list.appendChild(row);
    }
    static clearField() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
    static showAleart(message, classname) {
        let div = document.createElement('div');
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book_form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            UI.showAleart('Book removed !', 'sucess')
        }
    }
}

// Add addEventListener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);

// Define Functions
function newBook(e) {
    // console.log("rana")
    let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    // let ui = new UI();
    if (title === "" | author === "" | isbn === "") {
        UI.showAleart('please fill all the fields', 'error');
    }
    else {
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        UI.showAleart('Book Added Successfully', 'sucess');
        UI.clearField();
    }
    e.preventDefault();
}
function removeBook(e) {
    // let ui = new UI();
    UI.deleteFromBook(e.target);
    e.preventDefault();
}