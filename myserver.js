const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
var md5= require("utils/md5");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  console.log("Hello called");
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send("You sent:" + sanitizeHtml(req.body.post));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

function compute(data) {
  data = data || {};
  var key = md5.hex_md5( data.username || "anonymous" );
  return key
}
