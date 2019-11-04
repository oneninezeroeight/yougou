var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
let url = path.join(__dirname, "../public/json/types.json");

router.get("/:index", function(req, res, next) {
  let buf = fs.readFileSync(url, { encoding: "utf8" });
  let index = req.params.index;
  res.send(JSON.parse(buf)[index]);
});

module.exports = router;
