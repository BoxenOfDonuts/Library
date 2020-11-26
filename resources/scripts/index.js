let openForm = document.querySelector("#newBook")
let closeForm = document.querySelector('#cancel-button')
let submitForm = document.querySelector('#submit-button')
// let readButtons = document.querySelector('.library-container')
let readButtons = document.querySelector('.library-container');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.key = myLibrary.length;
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

    const newBook = new Book(title, author, Number(pageCount), read);

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
        const close = document.createElement('span');
        close.id = 'close';
        close.innerHTML = 'x'

        bookDiv.classList.add('book');

        for (let key in book) {
            if (key==='key') {
                bookDiv.setAttribute('data-key', book[key]);
                continue;
            } else if (key == 'read') {
                const ribbon = document.createElement('h4');
                let content = document.createElement('button');
                ribbon.innerHTML = 'unread'
                ribbon.classList.add('ribbon')

                if (book[key]) {
                    ribbon.style.display = 'none';
                    content.innerHTML = 'Complete';
                } else {
                    ribbon.style.display = 'block';
                    content.classList.add('un-read', 'btn');
                    content.innerHTML = 'Not Read';
                }
                content.classList.add('btn', 'read-button')
                bookDiv.appendChild(content)
                bookDiv.appendChild(ribbon)
                continue;

            }
            let postfix = (typeof book[key] != 'number') ? '' : ' pg';
            let content = document.createElement('div');
            content.classList.add(`${key}`);
            content.innerHTML = book[key] + postfix;
            bookDiv.appendChild(content);
            bookDiv.appendChild(close);
        }

        library.appendChild(bookDiv)

    })

}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
myLibrary.push(theHobbit)
const endersGame = new Book('Ender\'s Game', 'Orson Scott Card', 400, true)
myLibrary.push(endersGame)
listBooks();



function showHideForm(e) {
    const popup = document.querySelector('.form-popup');
    const formData = document.querySelector('form')

    if (this.id === 'newBook') {
        popup.style.display = 'block';
    } else if (this.id === 'cancel-button' || this.id === 'submit-button' ) {
        popup.style.display = 'none';
        formData.reset();
    }
}

function getFormData() {
    let formData = document.querySelector('form')

    addBookToLibrary(formData.title.value, formData.author.value, formData['page-count'].value, formData.read.checked)
}

function flipRead(e) {
    if (!e.target.classList.contains('read-button')) return;

    let ribbon = e.target.parentElement.lastElementChild;
    if (e.target.classList.contains('un-read')) {
        e.target.classList.remove('un-read')
        e.target.innerHTML = 'Complete'
        ribbon.style.display = 'none';

    } else {
        e.target.classList.add('un-read')
        e.target.innerHTML = 'Not Read'
        ribbon.style.display = 'block'
    }
}

openForm.addEventListener('click', showHideForm);
closeForm.addEventListener('click', showHideForm);
submitForm.addEventListener('click', getFormData);
submitForm.addEventListener('click', showHideForm);
readButtons.addEventListener('click', flipRead);