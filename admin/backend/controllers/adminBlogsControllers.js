const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

//Get all Blogs
const getNotes = asyncHandler(async (req, res) => {
  const user = await Note.find();
  res.json(user);
});

//Fetch one student
const getBlog = asyncHandler(async (req, res) => {
    const user = await Note.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
});

//Delete a Article

const DeleteBlog = asyncHandler(async (req, res) => {
 const user = await Note.findByIdAndDelete(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Article Not Found" });
    }
});

module.exports = { getNotes, getBlog, DeleteBlog };
