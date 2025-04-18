import { readFileSync } from "fs";

const getAllBooks = (req, res) => {
  try {
    const data = readFileSync("./db.json", "utf-8");
    const { books } = JSON.parse(data);
    res.send(books);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: "Serverdə xəta baş verdi",
    });
  }
};

export default getAllBooks;
