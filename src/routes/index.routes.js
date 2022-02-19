import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const taskArray = await Task.find().lean();
  res.render("index", { tasks: taskArray });
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const taskToEdit = await Task.findById(req.params.id).lean();
    res.render("edit", { task: taskToEdit });
  } catch (e) {
    console.log(e);
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

router.get("/toggleDone/:id", async (req, res) => {
  const taskToggleDone = await Task.findById(req.params.id);
  taskToggleDone.done = !taskToggleDone.done;
  await taskToggleDone.save();
  res.redirect("/");
});

router.post("/tasks/add", async (req, res) => {
  try {
    const newTask = Task(req.body);
    await newTask.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

export default router;
