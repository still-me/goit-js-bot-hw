const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const indexOfBook = this.books.indexOf(oldName);
    this.books.splice(indexOfBook, 1, newName);
    
    // Пиши код выше этой строки
  },
};

