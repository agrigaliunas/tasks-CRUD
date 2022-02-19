import { Router } from "express";
import Task from '../models/Task';

const router = Router();

router.get("/", async (req, res) => {
  
  const taskArray = await Task.find().lean();
  
  res.render("index", { tasks: taskArray});
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.post("/tasks/add", async (req, res) =>{
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
});

export default router;
