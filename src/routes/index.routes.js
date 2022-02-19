import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.post("/tasks/add", (req, res) =>{
  const task = req.body;
  res.send(task);
});

export default router;
