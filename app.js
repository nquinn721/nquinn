const express = require("express"),
  pug = require("pug"),
  app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.get("/", (req, res) => res.render("index"));
app.listen(process.env.PORT || 3000);
