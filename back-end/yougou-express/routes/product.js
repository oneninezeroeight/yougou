var express = require("express");
var router = express.Router();
var { find } = require("../mongo/mongo");

/* GET users listing. */
router.get("/:productId", function(req, res, next) {
  let productId = req.params.productId;

  find("products", { productId })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
