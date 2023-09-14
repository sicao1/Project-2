// IMPORTS
const express = require("express");
const app = express();
// Creating Controllers
const legosController = require("./controllers/legos");
const methodOverride = require("method-override");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// setup database
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

// connect to mongo
mongoose.connect(mongoURI);

//static public css
app.use(express.static("public"));
// method-override package for delete
app.use(methodOverride("_method"));

const db = mongoose.connection;
// optional create status messages to check mongo connection
db.on("error", (err) => {
  console.log("ERROR: ", err);
});
db.on("connected", () => {
  console.log("mongo connected");
});
db.on("disconnected", () => {
  console.log("mongo disconnected");
});

app.get("/", (req, res) => {
  res.redirect("/legos");
});

//middleware
app.use(express.urlencoded({ extended: true }));
app.use("/legos", legosController);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
