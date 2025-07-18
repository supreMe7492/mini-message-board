const express = require("express");
const path = require("node:path");
const app = express();
const newPost = require("./routes/new");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
app.get("/new", (req, res) => {
  res.render("form");
});
const newRouter = newPost(messages);
app.use("/new", newRouter);
app.listen(3000, () => {
  console.log("works");
});
