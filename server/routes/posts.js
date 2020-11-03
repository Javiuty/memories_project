const express = require("express");

const router = express.Router();

//local:5000/posts
router.get("/", (req, res) => {
  res.send("THIS WORKS");
});

module.exports = router;
