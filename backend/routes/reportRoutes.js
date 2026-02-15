const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { exportTasksReport, exportUsersReport } = require("../controllers/reportController");

const router = express.Router();

router.get("/exports/tasks", protect, adminOnly, exportTasksReport); //exort all tasks as excel/pdf
router.get("/exports/users", protect, adminOnly, exportUsersReport); //Eport user-task report

module.exports = router;