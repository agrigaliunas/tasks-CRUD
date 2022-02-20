"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controller");

var router = (0, _express.Router)();
router.get("/", _tasks.renderTasks);
router.get("/tasks/:id/edit", _tasks.renderEditTasks);
router.get("/tasks/:id/delete", _tasks.deleteTasks);
router.get("/tasks/:id/toggleDone", _tasks.toggleDoneTasks);
router.post("/tasks/add", _tasks.createTasks);
router.post("/tasks/:id/edit", _tasks.editTasks);
var _default = router;
exports["default"] = _default;