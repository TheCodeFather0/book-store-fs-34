import express from "express";
import homeController from "./controllers/home.js";
import getAllBooks from "./controllers/getAllBooks.js";
import createNewBook from "./controllers/createNewBook.js";

const port = 8080;
const app = express();
app.use(express.json());

app.get("/", homeController);
app.get("/books", getAllBooks);
app.post("/books", createNewBook);

app.listen(port, () => {
  console.log(`server http://localhost:${port} ünvanında işləyir!`);
});
