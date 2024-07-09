const express = require("express");


const app = express();
const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/?", (req, res) => {
  const season = req.query["season"] || 0;
  res.render("index", {season:season})
});
