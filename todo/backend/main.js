import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT || 3000 ;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); // Exit process if database connection fails
  });

const taskSchema = new mongoose.Schema({
  id: String,
  taskDetail: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

app.get('/send', async (req, res) => {
  try {
    let tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post('/add', async (req, res) => {
  try {
    const task = req.body;
    const newTask = new Task(task);
    await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add task" });
  }
});

app.patch('/update', async (req, res) => {
  try {
    const task = req.body
    let status = await Task.updateOne({ id: task.id }, { $set: { taskDetail: task.taskDetail, completed: task.completed } })
    if (status.matchedCount === 0) {
      throw new Error("Data is not found");
    }
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error updating task" });
  }
})

app.delete('/delete',async (req,res)=>{
  try {
    const task = req.body
    let status = await Task.deleteOne({id:task.id})
    if (status.deletedCount === 0) {
      throw new Error("Data is not found");
    }
    res.status(200).json({ message: "Task Deleted successfully" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error Deleting task" });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
