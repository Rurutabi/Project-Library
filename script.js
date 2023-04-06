const addButton = document.querySelector('.add');
const form = document.querySelector('.form');
const overlay = document.querySelector('.overlay');

class Book {
  constructor() {
    this.displayForm();
    this.overlayRemove();
  }

  displayForm() {
    addButton.addEventListener('click', () => {
      form.classList.remove('hide');
      overlay.classList.remove('hide');
    });
  }

  overlayRemove() {
    overlay.addEventListener('click', e => {
      form.classList.add('hide');
      overlay.classList.add('hide');
    });
  }
}

const exampleBook = new Book();
