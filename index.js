var express = require("express");
var path = require("path");
var proxy = require("express-http-proxy");
var app = express();

app.set("port", process.env.PORT || 5000);
const backend = process.env.BACKEND || "localhost:4000";
const dir = path.join(__dirname, "/public");
console.log(dir);
app.use("/", express.static(dir));
app.use("/api", proxy(backend));
app.listen(app.get("port"), function() {
  console.log(`http://localhost:${app.get("port")}`);
});
