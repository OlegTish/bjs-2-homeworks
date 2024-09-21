//Задача 1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
      if (this.state > 100) {
        this.state = 100;
      }
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  //Задача 2. Библиотека
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const bookIndex = this.books.findIndex((book) => book.name === bookName);
      if (bookIndex !== -1) {
        const book = this.books[bookIndex];
        this.books.splice(bookIndex, 1); // Удаляем книгу из библиотеки
        return book;
      }
      return null;
    }
  }
  
  //Тест
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); // null
  console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); // 4
  
  const issuedBook = library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); // 3
  
  issuedBook.state = 20;
  console.log(issuedBook.state); // 20
  
  issuedBook.fix();
  console.log(issuedBook.state); // 30
  
  library.addBook(issuedBook);
  console.log(
    "Количество книг после попытки вернуть книгу: " + library.books.length
  );
  
  //Задача 3. Журнал успеваемости
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        console.log(`Оценка ${mark} недопустима. Оценка должна быть от 2 до 5.`);
        return;
      }
  
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) {
        return 0;
      }
  
      const total = this.marks[subject].reduce((sum, mark) => sum + mark, 0);
      return total / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
  
      if (subjects.length === 0) {
        return 0;
      }
  
      const totalAverage = subjects.reduce((sum, subject) => {
        return sum + this.getAverageBySubject(subject);
      }, 0);
  
      return totalAverage / subjects.length;
    }
  }
  