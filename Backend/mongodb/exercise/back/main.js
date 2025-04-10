// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection

import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
const port = 4000
const app = express()

app.use(cors())
app.use(express.json());

await mongoose.connect('mongodb://127.0.0.1:27017/company');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
  });

const Employee = mongoose.model('Employee', employeeSchema);

app.post('/create', async (req, res) => {

    let data = req.body;
    console.log(data);

    for (let i = 0; i < 10; i++) {
        const employees = new Employee({
            name: data.names[Math.floor(Math.random()* data.names.length)],
            salary: data.salary[Math.floor(Math.random()* data.salary.length)],
            language: data.language[Math.floor(Math.random()* data.language.length)],
            city: data.city[Math.floor(Math.random()* data.city.length)],
            isManager: data.isManager[Math.floor(Math.random()* data.isManager.length)]
        });
    await employees.save();
    }
})

app.put('/drop', async (req,res)=>{
  await Employee.collection.drop();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})