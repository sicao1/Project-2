const express = require("express");
const router = express.Router();
const Lego = require("../models/legos");

router.get("/", async (req, res) => {
  const foundLegos = await Lego.find({});
  res.render("index.ejs", {
    legos: foundLegos,
  });
});

module.exports = router;
