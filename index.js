const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database
const usersDb = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pesan-menu", (req, res) => {
  res.render("pesanMenu");
});

app.post("/pesan-menu", (req, res) => {
  const makanan = req.body.makanan;
  const minuman = req.body.minuman;
  usersDb.push({
    makanan,
    minuman,
  });
  res.redirect("/tampilkan-pesanan");
  console.log(usersDb);
});

app.get("/jumlah-pesanan", (req, res) => {
  res.send(`Jumlah pesanan yaitu ${users.length} buah.`);
});

app.get("/tampilkan-pesanan-json", (req, res) => {
  res.json(usersDb);
});

app.get("/tampilkan-pesanan", (req, res) => {
  res.render("users", { usersDb });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
