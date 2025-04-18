import express from "express";
import homeController from "./controllers/home.js";

const port = 8080;
const app = express();

app.get("/", homeController);

app.listen(port, () => {
  console.log(`server http://localhost:${port} ünvanında işləyir!`);
});
