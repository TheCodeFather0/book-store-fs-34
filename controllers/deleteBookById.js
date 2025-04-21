import { readFileSync, writeFileSync } from "fs";

const deleteBookById = (req, res) => {
  const { id } = req.params;
  const data = readFileSync("./db.json", "utf-8");
  const { books } = JSON.parse(data);
  const currentBook = books.find((book) => book.id == id);

  if (currentBook) {
    const newData = books.filter((book) => book.id != id);
    const content = JSON.stringify({ books: newData }, null, 2);
    writeFileSync("./db.json", content);
    res.status(200).send({
      status: 200,
      message: "Kitab uğurla silindi",
    });
  } else {
    res.status(404).send({
      status: 404,
      message: "Kitab tapılmadı",
    });
  }
};

export default deleteBookById;
