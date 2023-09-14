const Lego = require("./models/legos");
const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/legoCollection";
const db = mongoose.connection;
mongoose.connect(mongoURI);

Lego.create([
  {
    name: "AT-AT",
    img: "https://www.lego.com/cdn/cs/set/assets/blt7dc15f12b7f8c85f/75288.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    theme: "Star Wars",
    pieces: 1267,
    itemNumber: 75288,
    dimensions: "H:14in W:6in D:15in",
    built: true,
    purchased: true,
  },
  {
    name: "X-Wing Starfighter",
    img: "https://www.lego.com/cdn/cs/set/assets/blt3e07af4c83a87efd/75355.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    theme: "Star Wars",
    pieces: 1953,
    itemNumber: 75355,
    dimensions: "H:11in W:18in D:22in",
    built: true,
    purchased: true,
  },
  {
    name: "PAC-MAN Arcade",
    img: "https://www.lego.com/cdn/cs/set/assets/blt74da473b5ba874fe/10323.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    theme: "Lego Icons",
    pieces: 2651,
    itemNumber: 10323,
    dimensions: "H:13in W:10in D:7in",
    built: false,
    purchased: true,
  },
]).then((log) => {
  console.log(log);
  db.close();
});
