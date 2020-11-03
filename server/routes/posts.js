const express = require("express");

const getPost = require("../controllers/posts");
const createPost = require("../controllers/posts");

const router = express.Router();

//local:5000/posts
router.get("/", getPost);
router.get("/", createPost);

module.exports = router;
