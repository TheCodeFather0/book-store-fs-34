import path from "path";
const homepage = path.resolve("./pages/home.html");

const homeController = (req, res) => {
  res.sendFile(homepage);
};
export default homeController;
