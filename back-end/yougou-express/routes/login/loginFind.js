var express = require("express");
var router = express.Router();
var { find } = require("../../mongo/mongo");

/* GET users listing. */
router.post("/", function(req, res, next) {
  let { phone, password } = req.body;

  find("user", { phone }, 1)
    .then(result => {
      if (result[0].password == password) {
        res.json({ status: "success", token: result[0]._id });
      } else {
        res.json({ status: "fail" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
