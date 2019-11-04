var express = require("express");
var router = express.Router();
var { insert, find } = require("../../mongo/mongo");

/* GET users listing. */
router.get("/", function(req, res, next) {
  let { phone } = req.query;

  find("user", { phone }, 1)
    .then(result => {
      if (result.length == 1) {
        res.json({ token: result[0]._id });
      } else {
        insert("user", { phone, password: "" }).then(result => {
          find("user", { phone }).then(result => {
            res.json({ token: result[0]._id });
          });
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
