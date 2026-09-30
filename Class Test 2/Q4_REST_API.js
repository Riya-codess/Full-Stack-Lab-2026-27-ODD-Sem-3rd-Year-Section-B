const express = require("express");

const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling"
  }
];

// GET all books
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

// POST create a new book
app.post("/api/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// DELETE a book
app.delete("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.status(200).json(deletedBook[0]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});