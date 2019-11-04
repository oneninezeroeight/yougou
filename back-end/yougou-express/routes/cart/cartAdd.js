var express = require("express");
var router = express.Router();
var { find, insert, update, remove } = require("../../mongo/mongo");

/* GET users listing. */
router.post("/", function(req, res) {
  let { token, productId, margin } = req.body;
  find("cart", { token, productId }).then(result => {
    if (result.length == 0) {
      insert("cart", { token, productId, number: 1 })
        .then(resul => {
          res.send(resul);
        })
        .catch(err => {
          res.send(err);
        });
    } else {
      if (result[0].number + margin == 0) {
        remove("cart", { token, productId }).then(resul => {
          res.send(resul);
        });
      } else {
        update(
          "cart",
          { token, productId },
          { number: result[0].number + margin }
        ).then(resul => {
          res.send(resul);
        });
      }
    }
  });
});

module.exports = router;
