const express = require("express");
const router = express.Router();
const Lego = require("../models/legos");

router.get("/", (req, res) => {
  res.send(`you hit the index`);
});

module.exports = router;
