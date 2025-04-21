import express from "express";
import homeController from "./controllers/home.js";
import getAllBooks from "./controllers/getAllBooks.js";
import getBookById from "./controllers/getBookById.js";
import createNewBook from "./controllers/createNewBook.js";
import deleteBookById from "./controllers/deleteBookById.js";
import cors from "cors";

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());

// GET REQUESTS
app.get("/", homeController);
app.get("/books", getAllBooks);
app.get("/books/:id", getBookById);

// POST REQUESTS
app.post("/books", createNewBook);

// DELETE REQUESTS
app.delete("/books/:id", deleteBookById);

app.listen(port, () => {
  console.log(`server http://localhost:${port} ünvanında işləyir!`);
});
