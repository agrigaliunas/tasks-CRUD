import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const taskArray = await Task.find().lean();
  res.render("index", { tasks: taskArray });
};

export const createTasks = async (req, res) => {
  try {
    const newTask = Task(req.body);
    await newTask.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

export const renderEditTasks = async (req, res) => {
  try {
    const taskToEdit = await Task.findById(req.params.id).lean();
    res.render("edit", { task: taskToEdit });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTasks = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

export const editTasks = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

export const toggleDoneTasks = async (req, res) => {
  const taskToggleDone = await Task.findById(req.params.id);
  taskToggleDone.done = !taskToggleDone.done;
  await taskToggleDone.save();
  res.redirect("/");
};
