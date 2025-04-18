import { readFileSync } from "fs";
import internalServerError from "../helpers/internalServerError.js";

const getAllBooks = (req, res) => {
  try {
    const data = readFileSync("./db.json", "utf-8");
    const { books } = JSON.parse(data);
    res.send(books);
  } catch (err) {
    internalServerError();
  }
};

export default getAllBooks;
