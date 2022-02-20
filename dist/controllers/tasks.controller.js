"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDoneTasks = exports.renderTasks = exports.renderEditTasks = exports.editTasks = exports.deleteTasks = exports.createTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var renderTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var taskArray;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Task["default"].find().lean();

          case 2:
            taskArray = _context.sent;
            res.render("index", {
              tasks: taskArray
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderTasks = renderTasks;

var createTasks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            newTask = (0, _Task["default"])(req.body);
            _context2.next = 4;
            return newTask.save();

          case 4:
            res.redirect("/");
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function createTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createTasks = createTasks;

var renderEditTasks = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var taskToEdit;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Task["default"].findById(req.params.id).lean();

          case 3:
            taskToEdit = _context3.sent;
            res.render("edit", {
              task: taskToEdit
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function renderEditTasks(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderEditTasks = renderEditTasks;

var deleteTasks = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Task["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.redirect("/");
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deleteTasks(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTasks = deleteTasks;

var editTasks = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Task["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            res.redirect("/");
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function editTasks(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.editTasks = editTasks;

var toggleDoneTasks = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var taskToggleDone;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Task["default"].findById(req.params.id);

          case 2:
            taskToggleDone = _context6.sent;
            taskToggleDone.done = !taskToggleDone.done;
            _context6.next = 6;
            return taskToggleDone.save();

          case 6:
            res.redirect("/");

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function toggleDoneTasks(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.toggleDoneTasks = toggleDoneTasks;