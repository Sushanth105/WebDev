import { useState, useRef, useEffect } from 'react';
import NavBar from './components/NavBar';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';

function App() {
  const inputRef = useRef(null);
  const [newTask, setnewTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editId, setEditId] = useState(null)

  async function fetchData() {
    try {
      let a = await fetch("http://localhost:3000/send")
      if (!a.ok) {
        throw new Error("Error while fetching");
      }
      let task = await a.json();
      setTasks(task);
    } catch (error) {
      console.error(error);
    }
  }

  async function addData(task) {
    try {
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
      if(!response.ok){
        throw new Error("Error while sending");
        
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function updateData(task) {
    try {
      const response = await fetch("http://localhost:3000/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
      if(!response.ok){
        throw new Error("Error while sending");
        
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteData(task) {
    try {
      const response = await fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
      if(!response.ok){
        throw new Error("Error while sending");
        
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    inputRef.current.focus();
    fetchData();
  }, []);

  const handlenewTask = (e) => {
    setnewTask(e.target.value)
  }

  const handleAdd = async (e) => {
    if (editId) {
      // setTasks(tasks.map((task) => {
      //   return editId == task.id ? { ...task, taskDetail: newTask.trim() } : task;
      // }))
      const newTaskObj = {
        id: editId,
        taskDetail: newTask.trim(),
        completed: tasks.find((task) => { return task.id === editId}).completed
      };
      await updateData(newTaskObj);
      await fetchData();
      setnewTask("")
      inputRef.current.focus();
    }
    else {
      const newTaskObj = {
        id: uuidv4(),
        taskDetail: newTask.trim(),
        completed: false
      };
      // setTasks([...tasks, newTaskObj]);
      await addData(newTaskObj);
      await fetchData();
      setnewTask("")
      inputRef.current.focus();
    }
  }

  const handleEdit = (id) => {
    setEditId(id);
    let editTask = tasks.filter((task) => {
      return task.id == id
    })
    setnewTask(editTask[0].taskDetail)
    inputRef.current.focus();
  }

  const handleDelete = async (id) => {
    // setTasks(tasks.filter((task) => { return task.id !== id }));
    const newTaskObj = {
      id: id
    };
    await deleteData(newTaskObj);
    await fetchData();
  }

  const HandleCheck = async (id) => {
    // setTasks(
    //   tasks.map((task) => {
    //     return task.id == id ? { ...task, completed: !task.completed } : task
    //   })
    // )
    const newTaskObj = {
      id: id,
      taskDetail: tasks.find((task) => { return task.id === id}).taskDetail,
      completed: !tasks.find((task) => { return task.id === id}).completed
    };
    await updateData(newTaskObj);
    await fetchData();
  }

  const TaskList = (props) => {
    return (
      <div className=' border-2 border-amber-400 rounded-3xl flex m-4 justify-between'>
        <div className=' flex justify-center items-center'>
          <input onChange={() => { HandleCheck(props.id) }} checked={props.completed} type="checkbox" name="check" id="check" className=' scale-150 m-4' />
          <div style={props.completed ? { textDecoration: "line-through" } : {}} className='text-[20px] text-amber-400'>{props.task}</div>
        </div>
        <div className='flex'>
          <button onClick={() => { handleEdit(props.id) }} className='border-2 border-amber-400 rounded-3xl px-5 m-2 cursor-pointer text-amber-400 hover:bg-amber-400 hover:text-white active:bg-amber-100 active:text-amber-400'>Edit</button>
          <button onClick={() => { handleDelete(props.id) }} className='border-2 border-amber-400 rounded-3xl px-5 m-2 cursor-pointer text-amber-400 hover:bg-amber-400 hover:text-white active:bg-amber-100 active:text-amber-400'>Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <div className='min-h-14 mx-auto my-6 w-[90%] bg-amber-100 rounded-3xl'>
        <label htmlFor='task' className='text-center block text-3xl font-bold text-amber-400'>
          Add Task
        </label>
        <div className='flex gap-3 justify-between'>
          <input ref={inputRef} type="text" value={newTask} onChange={handlenewTask} className=' border-2 border-amber-400 outline-0 text-amber-400 text-[20px] p-2 rounded-3xl m-2 w-[80%] lg:w-[85%] 2xl:w-[90%] h-10' name="task" id="task" />
          <button onClick={handleAdd} className='border-2 border-amber-400 rounded-3xl px-5 m-2 cursor-pointer text-amber-400 hover:bg-amber-400 hover:text-white active:bg-amber-100 active:text-amber-400'>Add</button>
        </div>
      </div>
      <div className='w-[90%] my-6 mx-auto bg-amber-100 rounded-3xl py-3'>
        <div className=' text-3xl text-center font-bold text-amber-400'>
          Todo List
        </div>
        <div className=' min-h-20'>
          {
            tasks.map((task) => {
              return <TaskList task={task.taskDetail} id={task.id} key={task.id} completed={task.completed} />
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
