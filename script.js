const addButton = document.querySelector('.add');
const addButtonForm = document.querySelector('.added-book');
const form = document.querySelector('.form');
const overlay = document.querySelector('.overlay');
const submitButton = document.querySelector('.submit-btn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const logButton = document.querySelector('.log');

class Book {
  library = [];
  title = '';
  author = '';
  pages = '';
  checkRead = true;
  constructor() {
    this.displayForm();
    this.overlayRemove();
    this.setResult();
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

  setResult() {
    submitButton.addEventListener('click', e => {
      e.preventDefault();
      const html = `<div class="added-book">
      <p>${titleInput.value}</p>
      <p>${authorInput.value}</p>
      <p>${pagesInput.value}</p>
      <div class="checkread-container">
        <button class="checkread-btn" type="submit" id="submit-btn">
          Read
        </button>
      </div>
      <div class="remove-container">
        <button class="remove-btn" type="submit" id="submit-btn">
          Remove
        </button>
      </div>
    </div>`;
      titleInput.value = '';
      authorInput.value = '';
      pagesInput.value = '';
      form.classList.add('hide');
      overlay.classList.add('hide');
      addButtonForm.insertAdjacentHTML('afterend', html);
      // console.log(this.title);
      // console.log(this.author);
      // console.log(this.pages);
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
