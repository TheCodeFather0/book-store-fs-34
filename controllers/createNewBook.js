import { readFileSync, writeFileSync } from "fs";
import internalServerError from "../helpers/internalServerError.js";
import { randomUUID } from "crypto";

const createNewBook = (req, res) => {
  try {
    // faylı oxuduq
    const data = readFileSync("./db.json", "utf-8");
    const { books } = JSON.parse(data);
    const { title, author, year, genre, price, inStock } = req.body;

    if (
      !title ||
      !author ||
      !year ||
      !genre ||
      !price ||
      typeof inStock !== "boolean"
    ) {
      res.status(400).send({
        status: 400,
        message: "Məlumatlar əskikdir!",
      });
    } else {
      // yeni kitabın datasını ayarladıq ve massivə əlavə etdik
      const newBook = req.body;
      newBook.id = randomUUID();
      books.push(newBook);

      // yeni kitabı db-yə əlavə et
      const content = JSON.stringify({ books: books }, null, 2);
      writeFileSync("./db.json", content);

      res.status(201).send({
        status: 201,
        message: "Yeni kitab əlavə edildi!",
      });
    }
  } catch (err) {
    internalServerError();
  }
};

export default createNewBook;
