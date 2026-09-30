const express = require("express");

const app = express();

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho"
  }
];

app.get("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  res.status(200).json(book);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});