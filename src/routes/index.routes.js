import { Router } from "express";
import {
  renderTasks,
  createTasks,
  renderEditTasks,
  deleteTasks,
  editTasks,
  toggleDoneTasks,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/edit/:id", renderEditTasks);

router.get("/delete/:id", deleteTasks);

router.get("/toggleDone/:id", toggleDoneTasks);

router.post("/tasks/add", createTasks);

router.post("/edit/:id", editTasks);

export default router;
