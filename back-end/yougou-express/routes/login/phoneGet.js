var express = require("express");
var router = express.Router();
var ObjectId = require("mongodb").ObjectID;
var { insert, find } = require("../../mongo/mongo");

/* GET users listing. */
router.get("/", function(req, res, next) {
  let { token } = req.query;
  find("user", { _id: ObjectId(token) })
    .then(result => {
      res.send(result[0]);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
