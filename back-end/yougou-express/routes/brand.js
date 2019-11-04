var express = require("express");
var router = express.Router();
var { find } = require("../mongo/mongo");

/* GET users listing. */
router.get("/:brandId/:page", function(req, res, next) {
  let { brandId: brandCommonId, page } = req.params;

  find("products", { brandCommonId }, 10 * page)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
