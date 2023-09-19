const express = require("express");
const router = express.Router();
const Lego = require("../models/legos");

// NEW ROUTE
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// SHOW ROUTE
router.get("/:id", async (req, res) => {
  const foundLegos = await Lego.findById(req.params.id);
  res.render("show.ejs", {
    lego: foundLegos,
  });
});

// EDIT ROUTE
router.get("/:id/edit", async (req, res) => {
  const foundLegos = await Lego.findById(req.params.id);
  res.render("edit.ejs", {
    lego: foundLegos,
  });
});
// PUT ROUTE for edit.ejs
router.put("/:id", async (req, res) => {
  req.body.built === "on" ? (req.body.built = true) : (req.body.built = false);

  req.body.purchased === "on"
    ? (req.body.purchased = true)
    : (req.body.purchased = false);

  const updateLego = await Lego.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.redirect(`/legos/${req.params.id}`);
});

// CREATE/POST ROUTE for new.ejs
router.post("/", async (req, res) => {
  req.body.built === "on" ? (req.body.built = true) : (req.body.built = false);
  req.body.purchased === "on"
    ? (req.body.purchased = true)
    : (req.body.purchased = false);

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

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
  const lego = await Lego.findByIdAndDelete(req.params.id);
  console.log(lego);
  res.redirect("/legos");
});

module.exports = router;
