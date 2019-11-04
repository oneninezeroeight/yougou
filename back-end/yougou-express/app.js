var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var productRouter = require("./routes/product");
var typeRouter = require("./routes/type");
var brandRouter = require("./routes/brand");
var floorRouter = require("./routes/floor");
var loginFindRouter = require("./routes/login/loginFind");
var loginGetRouter = require("./routes/login/loginGet");
var phoneGetRouter = require("./routes/login/phoneGet");
var addToCartRouter = require("./routes/cart/cartAdd");
var deleteFromCartRouter = require("./routes/cart/cartDelete");
var getCartRouter = require("./routes/cart/getCart");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/type", typeRouter);
app.use("/brand", brandRouter);
app.use("/floor", floorRouter);
app.use("/loginFind", loginFindRouter);
app.use("/loginGet", loginGetRouter);
app.use("/cartAdd", addToCartRouter);
app.use("/cartDelete", deleteFromCartRouter);
app.use("/getCart", getCartRouter);
app.use("/getUser", phoneGetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
