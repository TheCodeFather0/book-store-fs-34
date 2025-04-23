import { Router } from "express";
import getBookById from "../controllers/getBookById.js";
import getAllBooks from "../controllers/getAllBooks.js";
import createNewBook from "../controllers/createNewBook.js";
import deleteBookById from "../controllers/deleteBookById.js";

const bookRouter = new Router();

// GET REQUESTS

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);

// POST REQUESTS
bookRouter.post("/", createNewBook);

// DELETE REQUESTS
bookRouter.delete("/:id", deleteBookById)


export default bookRouter