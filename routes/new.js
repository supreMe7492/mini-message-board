const { Router } = require("express");

const newPost = Router();

function postMessage(messages) {
  newPost.post("/", (req, res) => {
    const user = req.body.user;
    const text = req.body.message;
    const added = new Date();
    const details = { text, user, added };
    messages.push(details);
    res.redirect("/");
  });
  return newPost;
}

module.exports = postMessage;
