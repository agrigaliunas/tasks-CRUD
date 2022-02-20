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

router.get("/tasks/:id/edit", renderEditTasks);

router.get("/tasks/:id/delete", deleteTasks);

router.get("/tasks/:id/toggleDone", toggleDoneTasks);

router.post("/tasks/add", createTasks);

router.post("/tasks/:id/edit", editTasks);

export default router;
