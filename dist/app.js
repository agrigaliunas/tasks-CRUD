"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = require("express-handlebars");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])();
app.set("views", _path["default"].join(__dirname, "views")); // define where is views folder

var exphbs = (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: "main",
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  extname: ".hbs"
});
app.engine(".hbs", exphbs.engine); // set engine -> handlebars

app.set("view engine", ".hbs"); // Middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); // Routes

app.use(_index["default"]); // Static files

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;