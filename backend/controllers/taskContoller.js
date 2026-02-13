const Task = require("../models/Task");

//@desc Get all tasks (Admin: all , User: only assigned)
//@route GET/api/tasks/
//@access Private
const getTasks =  async (req,res) => {
    try {
        const {status} = req.query;
        let filter = {};

        if(status) {
            filter.status = status;
        }

        let tasks;

        if(req.user.role === "admin"){
            tasks = await Task.find(filter).populate(
                "assignedTo",
                "name email profileImageUrl"
            );
        }
        else
        {
            tasks = await Task.find({...filter, assignedTo: req.user._id}).populate(
                "assignedTo",
                "name email profileImageUrl"
            );
        }

        //Add completed todoChecklist coutn to each task
        tasks = await Promise.all(
            tasks.map(async(task) => {
                const completedCount = task.todoChecklist.filter(
                    (item) => item.completed
                ).length;
                return {...task._doc, completedTodoCount: completedCount};
            })
        ); 
        //Start here
    } catch (error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
};

//@desc Get task by id
// @route GET/api/tasks/:id
//access Private
const getTaskById = async (req,res) => {
    try {

    } catch (error) {
        res.status(500).json({message: "Server error: ", error:error.message});
    }
};

// @desc Create a new task
// @route POST/api/tasks/
// @access Private(admin)
const createTask = async (req,res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;

        if(!Array.isArray(assignedTo)){
            return res.status(400).json({message: "assignedTo must be an array of user IDs"});
        }

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            createdBy: req.user._id,
            todoChecklist,
            attachments,
        });

        res.status(201).json({message: "Task created successfully", task});
    } catch(error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
};

// @desc Update atsk details
// @route PUT/api/tasks/:id
// @access Private
const updateTask = async (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error:error.message});
    }
};

// @desc Delete a Task (admin only)
// @route DELETE/api/tasks/:id
// @access Private(admin)
const deleteTask = async (req,res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
};

// @desc Update Task status
// @route PUT/api/tasks/:id/status
// @access Private
const updateTaskStatus = async (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error:error.message});
    }
};

//@desc Update Task checkList
// @route PUT/api/tasks/:id/todo
// @access Private
const updateTaskCheckList = async (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
};

//@desc Dashboard Data (Admin Only)
//@route GET/api/tasks/dashboard-data
//@access Private(admin only)
const getDashboardData = async (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error:error.message});
    }
};

//@desc Dashboard data (user specific)
//@route GET/api/tasks/user-dashboard-data
//@access Private
const getUserdashboardData = async (req, res) => {
    try {

    } catch(error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskCheckList,
    getDashboardData,
    getUserdashboardData,
};
