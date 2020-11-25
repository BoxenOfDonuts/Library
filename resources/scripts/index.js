let openForm = document.querySelector("#newBook")
let closeForm = document.querySelector('#cancel-button')
let submitForm = document.querySelector('#submit-button')

let myLibrary = [];

function Book(title, author, pages, read) {
    // this.key = myLibrary.length;
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

function addBookToLibrary(...args) {
    const title = args[0];
    const author = args[1];
    const pageCount = args[2];
    const read = args[3];

    const newBook = new Book(title, author, pageCount, read);

    myLibrary.push(newBook);
    listBooks();

}

function listBooks() {
    const library = document.querySelector('.library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        for (let key in book) {
            if (key==='key') continue;
            let postfix = (typeof book[key] != 'number') ? '' : ' pg';
            let content = document.createElement('div');
            // if (key === 'read') {
            //     if (!book[key]) {
            //         content.classList.add('un-read')
            //         content.innerHTML = 'Not Read';
            //     } else {
            //         content.innerHTML = 'Read';
            //     }
            //     bookDiv.appendChild(content)
            //     continue;
            // }

            content.classList.add(`${key}`);
            content.innerHTML = book[key] + postfix;
            bookDiv.appendChild(content);
        }

        library.appendChild(bookDiv)

    })

}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
myLibrary.push(theHobbit)
const endersGame = new Book('Ender\'s Game', 'Orson Scott Card', 400, true)
myLibrary.push(endersGame)
listBooks();



function showHidForm(e) {
    const popup = document.querySelector('.form-popup');

    if (this.id === 'newBook') {
        popup.style.display = 'block';
    } else if (this.id === 'cancel-button') {
        popup.style.display = 'none';

    }
}

function getFormData() {
    let formData = document.querySelector('form')
    console.log(formData.title.value)
    console.log(formData.author.value)
    console.log(formData['page-count'].value)
    console.log(formData.read.checked)

    addBookToLibrary(formData.title.value, formData.author.value, formData['page-count'].value, formData.read.checked)

}

openForm.addEventListener('click', showHidForm);
closeForm.addEventListener('click', showHidForm);
submitForm.addEventListener('click', getFormData);