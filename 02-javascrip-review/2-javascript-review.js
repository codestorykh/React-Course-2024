const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

let books = getBooks();

// Array map method
const titles = books.map((book) => book.title);
for (let title of titles) {
  console.log(title);
}
// Array filter method
const fantasyBooks = books.filter((book) =>
  book.genres.includes("high-fantasy")
);
for (let book of fantasyBooks) {
  console.log(book.title);
}

// Array reduce method
const totalPageCount = books.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPageCount);

// Array some method
const hasMovieAdaptation = books.some((book) => book.hasMovieAdaptation);
console.log(hasMovieAdaptation);

// Array every method
const allBooksHaveTranslations = books.every((book) => book.translations);
console.log(allBooksHaveTranslations);

// Array find method
const book = books.find((book) => book.translations.spanish);
console.log(book.title);

// Array findIndex method
const bookIndex = books.findIndex((book) => book.translations.spanish);
console.log(bookIndex);

// Array includes method
const hasSpanishTranslation = books.some((book) =>
  Object.keys(book.translations).includes("spanish")
);
console.log(hasSpanishTranslation);

// Array flat method
const genres = books.map((book) => book.genres);
const flatGenres = genres.flat();
console.log(flatGenres);

// Array flatMap method
const flatGenres2 = books.flatMap((book) => book.genres);
console.log(flatGenres2);

// Array sort method
const sortedBooks = books.sort((a, b) => a.pages - b.pages);
console.log(sortedBooks);

// Array reverse method
const reverseBooks = books.reverse();
console.log(reverseBooks);

// Array slice method
const firstTwoBooks = books.slice(0, 2);
console.log(firstTwoBooks);

// Array splice method
const removedBooks = books.splice(0, 2);
console.log(removedBooks);

// Array push method
books.push({
  id: 6,
  title: "The Hobbit I",
  publicationDate: "1937-09-21",
});

books.push({
  id: 7,
  title: "The Hobbit II",
  publicationDate: "1937-09-21",
});

books.push({
  id: 8,
  title: "The Hobbit III",
  publicationDate: "1937-09-21",
});

console.log(books.map((book) => book.title));

// Array unshift method

books.unshift({
  id: 9,
  title: "The Hobbit IV",
  publicationDate: "1937-09-21",
});
console.log(books.map((book) => book.title));
