const { getNotes, getBlog, DeleteBlog } = require("../controllers/adminBlogsControllers");

const router = require("express").Router();

router.route("/getAllBlogs").get(getNotes);

router.route("/getOneBlog/:id").get(getBlog);

router.route("/deleteBlog/:id").delete(DeleteBlog);

module.exports = router;
