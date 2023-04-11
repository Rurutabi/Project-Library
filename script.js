const addButton = document.querySelector('.add');
const form = document.querySelector('.form');
const overlay = document.querySelector('.overlay');
const submitButton = document.querySelector('.submit-btn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('name');
const pagesInput = document.getElementById('pages');
const logButton = document.querySelector('.log');
const bookContainer = document.querySelector('.book-container');
const checkForm = document.getElementById('checkread');

class Book {
  library = [];
  title = '';
  author = '';
  pages = '';
  checkRead = true;
  constructor() {
    this.displayForm();
    this.overlayRemove();
    this.submitBook();
    this.getLocalStorage();
  }

  displayForm() {
    addButton.addEventListener('click', () => {
      form.classList.remove('hide');
      overlay.classList.remove('hide');
    });
  }

  overlayRemove() {
    overlay.addEventListener('click', () => {
      form.classList.add('hide');
      overlay.classList.add('hide');
    });
  }

  createBook(newBook) {
    const addedBook = document.createElement('div');
    addedBook.classList.add('added-book');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = newBook.title;
    addedBook.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = newBook.author;
    addedBook.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = newBook.pages;
    addedBook.appendChild(bookPages);

    const readButtonContainer = document.createElement('div');
    readButtonContainer.classList.add('checkread-container');

    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    readButtonContainer.appendChild(readButton);
    addedBook.appendChild(readButtonContainer);

    const removeButtonContainer = document.createElement('div');
    removeButtonContainer.classList.add('remove-container');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.textContent = 'Remove';
    removeButtonContainer.appendChild(removeButton);
    addedBook.appendChild(removeButtonContainer);
    bookContainer.appendChild(addedBook);

    this.changeButtonColor(readButton, newBook);
    this.checkReadBox(readButton, newBook);
    this.removeBook(removeButton, addedBook);
  }

  submitBook() {
    submitButton.addEventListener('click', event => {
      if (
        titleInput.value !== '' &&
        authorInput.value !== '' &&
        pagesInput.value !== '' &&
        pagesInput.value > 0 &&
        pagesInput.value < 999999
      ) {
        event.preventDefault();

        const newBook = {
          title: titleInput.value,
          author: authorInput.value,
          pages: pagesInput.value,
          checkRead: checkForm.checked,
        };
        this.library.push(newBook);

        this.createBook(newBook);

        // Store the library array in local storage as a JSON string
        this.setLocalStroage();

        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        checkForm.checked = false;
        form.classList.add('hide');
        overlay.classList.add('hide');
      }
    });
  }

  checkReadBox(checkbox, newBook) {
    if (newBook.checkRead === true) {
      checkbox.classList.add('green-button');
    } else {
      checkbox.classList.add('checkread-btn');
    }
  }

  changeButtonColor(checkbox, newBook) {
    checkbox.addEventListener('click', () => {
      if (checkbox.classList.contains('green-button')) {
        checkbox.classList.remove('green-button');
        checkbox.classList.add('checkread-btn');
        newBook.checkRead = false;
        console.log(newBook.checkRead);
      } else if (checkbox.classList.contains('checkread-btn')) {
        checkbox.classList.remove('checkread-btn');
        checkbox.classList.add('green-button');
        newBook.checkRead = true;
        console.log(newBook.checkRead);
      } else {
        console.log('Something went wrong');
      }
    });
  }

  removeBook(removeButton, addButtonForm) {
    removeButton.addEventListener('click', () => {
      addButtonForm.remove();
    });
  }

  setLocalStroage() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('library'));
    console.log(data);

    if (!data) return;

    this.library = data;
    console.log(this.library);

    this.library.forEach(value => {
      this.createBook(value);
    });
  }
}

const exampleBook = new Book();
