import './index.css';
const openForm = document.querySelector("#newBook")
const closeForm = document.querySelector('#cancel-button')
const submitForm = document.querySelector('#submit-button')
const readButtons = document.querySelector('.library-container');
const closeButtons = document.querySelector('.library-container');
const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('.form-container input');


let myLibrary = [];
let key = 0;
let saveToLocalStorage = () => {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

let removeFromLocalStorage = () => {
    localStorage.removeItem('library');
}

let loadFromLocalStorage = () => {
    let library = localStorage.getItem('library')

    if (library) {
        myLibrary = JSON.parse(library);
        listBooks();
    }
    
}


class Book {
    constructor(title, author, pages, read) {
        this.key = key++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

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
                // ribbon.innerHTML = 'unread'
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

    saveToLocalStorage();

}

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
    const formData = document.querySelector('form')
    if (!formValidation.validateAll(formData)) {
        return
    }

    showHideForm.call(this)
    addBookToLibrary(formData.title.value, formData.author.value, formData['page-count'].value, formData.read.checked)
}

function flipRead(e) {
    if (!e.target.classList.contains('read-button')) return;
    let dataKey = Number(e.target.parentElement.dataset.key);
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

    for (const  [index, element] of myLibrary.entries()) {
        if (element.key === dataKey) {
            myLibrary[index].read = !myLibrary[index].read
        }
    }

    saveToLocalStorage();
}

function removeBook(e) {
    if (e.target.id != 'close') return;
    let dataKey = Number(e.target.parentElement.dataset.key);

    for (const  [index, element] of myLibrary.entries()) {
        if (element.key === dataKey) {
            myLibrary.splice(index , 1);
        }
    }
    
    listBooks();
    
}

const formValidation = (() => {

    const validateTitle = (element) => {
        const titleError = document.querySelector('[name="title"] + span.error')
        if (element.validity.valid) {
            titleError.textContent = '';
            titleError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, titleError)
        }
    }

    const validateAuthor = (element) => {
        const authorError = document.querySelector('[name="author"] + span.error')
        if (element.validity.valid) {
            authorError.textContent = '';
            authorError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, authorError)
        }
    }

    const validatePageCount = (element) => {
        const pageError = document.querySelector('[name="page-count"] + span.error')
        if (element.validity.valid) {
            pageError.textContent = '';
            pageError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, pageError)
        }
    }

    const validateAll = (form) => {
        const formData = form
        const fields = [formData.title, formData.author, formData['page-count']]
        let valid = true;
        fields.forEach(field => {
            if (!field.validity.valid) {
                const errorSpan = field.nextElementSibling;
                showError(field, errorSpan);
                valid = false;
            }
        })
        
        return valid
    }

    const showError = (field, errorSpan) => {
        if (field.validity.valueMissing) {
            errorSpan.textContent = 'Please enter a value';
        } else if (field.validity.typeMismatch) {
            errorSpan.textContent = 'Value needs to be valid';
        } else if (field.validity.tooShort) {
            errorSpan.textContent = `Field should be at least ${field.minLength} characters`
        } else if (field.validity.rangeUnderflow) {
            errorSpan.textContent = `Every book has at least ${field.min} page`
        }

        errorSpan.classList.add('active')
        field.classList.add('active')

    }

    return {
        validateTitle,
        validateAuthor,
        validatePageCount,
        validateAll,
    }

})();



function validateOnBlur(e) {
    const element = e.target;
    const name = element.name;
    if (name === 'read') return;

    switch(name) {
        case 'title': 
            formValidation.validateTitle(element);
            break;
        case 'author':
            formValidation.validateAuthor(element);
            break;
        case 'page-count':
            formValidation.validatePageCount(element);
            break;
        default:
            console.log('oops')
    }

}

loadFromLocalStorage();

openForm.addEventListener('click', showHideForm);
closeForm.addEventListener('click', showHideForm);
submitForm.addEventListener('click', getFormData);
readButtons.addEventListener('click', flipRead);
closeButtons.addEventListener('click', removeBook);
inputs.forEach(input => input.addEventListener('blur', validateOnBlur))