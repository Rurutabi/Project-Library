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
    this.createBook();
    this.checkingValue();
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

  createBook() {
    submitButton.addEventListener('click', e => {
      if (
        titleInput.value !== '' &&
        authorInput.value !== '' &&
        pagesInput.value !== '' &&
        pagesInput.value > 0 &&
        pagesInput.value < 999999
      ) {
        // if ((pagesInput.value > 0) & (pagesInput < 99)) {
        e.preventDefault();
        const addedBook = document.createElement('div');
        addedBook.classList.add('added-book');

        const bookTitle = document.createElement('p');
        bookTitle.textContent = titleInput.value;
        addedBook.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = authorInput.value;
        addedBook.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = pagesInput.value;
        addedBook.appendChild(bookPages);

        const readButtonContainer = document.createElement('div');
        readButtonContainer.classList.add('checkread-container');

        const readButton = document.createElement('button');
        this.checkReadBox(readButton);
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

        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        checkForm.checked = false;
        form.classList.add('hide');
        overlay.classList.add('hide');
        bookContainer.appendChild(addedBook);

        this.changeRead(readButton);
        this.checkReadBox(readButton);
        this.removeBook(removeButton, addedBook);
      }
    });
  }

  checkReadBox(checkbox) {
    if (checkForm.checked) {
      checkbox.classList.add('green-button');
    } else {
      checkbox.classList.add('checkread-btn');
    }
  }

  changeRead(checkbox) {
    checkbox.addEventListener('click', () => {
      if (checkbox.classList.contains('green-button')) {
        checkbox.classList.remove('green-button');
        checkbox.classList.add('checkread-btn');
      } else if (checkbox.classList.contains('checkread-btn')) {
        checkbox.classList.remove('checkread-btn');
        checkbox.classList.add('green-button');
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

  checkingValue() {
    logButton.addEventListener('click', () => {
      console.log(this.title);
      console.log(this.library);
    });
  }
}

const exampleBook = new Book();
