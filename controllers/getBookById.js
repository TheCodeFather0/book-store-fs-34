import { readFileSync } from "fs";

const getBookById = (req, res) => {
  const { id } = req.params;
  const data = readFileSync("./db.json", "utf-8");
  const { books } = JSON.parse(data);
  const currentBook = books.find((book) => book.id == id);

  if (currentBook) {
    res.status(200).send(currentBook);
  } else {
    res.status(404).send({
      status: 404,
      message: "Kitab tapılmadı",
    });
  }
};

export default getBookById;
