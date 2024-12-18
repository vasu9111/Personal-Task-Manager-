import express from "express";
import taskcontroller from "./task.controller.js";
import taskvalidation from "./task.validation.js";
import middleware from "../../middleware/task.js";
const router = express.Router();

router.post(
  "/tasks",
  middleware.authenticateToken,
  middleware.validate(taskvalidation.createTask),
  taskcontroller.createTask
);

export default router;