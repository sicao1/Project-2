const express = require("express");
const router = express.Router();
const Lego = require("../models/legos");

router.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;