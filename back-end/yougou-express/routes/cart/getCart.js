var express = require("express");
var router = express.Router();
var { find } = require("../../mongo/mongo");

const LIMIT_NUMBER = 100;

router.get("/", async (req, res, next) => {
  let token = req.query.token;
  let items = await find("cart", { token }, LIMIT_NUMBER);

  let orArr = items.map(item => {
    return { productId: item.productId };
  });

  let arr = await find("products", { $or: orArr }, LIMIT_NUMBER);

  let result = items.map((item, index) => {
    return Object.assign(
      { productId: item.productId, number: item.number },
      arr.find(it => it.productId == item.productId)
    );
  });

  res.send(result);
});

module.exports = router;
