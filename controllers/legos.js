const express = require("express");
const router = express.Router();
const Lego = require("../models/legos");

// NEW ROUTE
router.get("/new", (req, res) => {
  res.render("new.ejs");
});
// CREATE/POST ROUTE for new.ejs
router.post("/", async (req, res) => {
  if (req.body.built === "on") {
    req.body.built = true;
  } else {
    req.body.built = false;
  }

  if (req.body.purchased === "on") {
    req.body.purchased = true;
  } else {
    req.body.purchased = false;
  }

  try {
    const newLego = await Lego.create(req.body);
    console.log(newLego);
    res.redirect("/legos");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// INDEX ROUTE
router.get("/", async (req, res) => {
  const foundLegos = await Lego.find({});
  res.render("index.ejs", {
    legos: foundLegos,
  });
});

module.exports = router;
