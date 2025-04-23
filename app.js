import cors from "cors";
import dotenv from 'dotenv'
import express from "express";
import bookRouter from "./routes/booksRouter.js";
import homeController from "./controllers/home.js";
import serverInfo from "./helpers/serverInfo.js";


dotenv.config();
const port = process.env.SERVER_PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"))
let index = 0;

const dailyViews = (req,res,next) => {
  index++
  console.log('request: ' + index);
  next()
}
app.use(dailyViews)

app.get("/", homeController);
app.use('/books',bookRouter)
app.get('/daily-views',(req,res) => {
  res.send({
    status:200,
    views:index
  })
})





app.listen(port,serverInfo(port));
