const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserdashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskCheckList } = require("../controllers/taskContoller");

const router = express.Router();

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserdashboardData);
router.get("/", protect, getTasks); //Get all tasks (Admin: all, user:assigned)
router.get("/:id", protect, getTaskById); //Get task by id
router.post("/", protect, adminOnly, createTask); //Create a TAsk (Admin Only)
router.put("/:id",protect, updateTask); //Update task details
router.delete("/:id", protect, adminOnly, deleteTask); //Delete a Task (Admin Only)
router.put("/:id/status", protect, updateTaskStatus); //Update task status
router.put("/:id/todo", protect, updateTaskCheckList); //Update Task checkList 

module.exports = router;


