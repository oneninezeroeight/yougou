var express = require("express");
var router = express.Router();
var { find, insert, update, remove } = require("../../mongo/mongo");

router.post("/", (req, res, next) => {
  let { token, productId } = req.body;
  // let token='2',productId='2';
  remove("cart", { token, productId }).then(result => {
    res.json(result);
  });
});

module.exports = router;
