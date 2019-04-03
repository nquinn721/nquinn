const express = require("express"),
  pug = requrie("pug"),
  app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 3000);
