export const renderTasks = async (req, res) => {
    const taskArray = await Task.find().lean();
    res.render("index", { tasks: taskArray });
};