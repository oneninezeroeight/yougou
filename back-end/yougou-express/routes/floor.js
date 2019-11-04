var express = require("express");
var router = express.Router();
var { find } = require("../mongo/mongo");

/* GET users listing. */
router.get("/:page", function(req, res, next) {
  let page = req.params.page;

  find("floor", {}, page * 1 + 1)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
