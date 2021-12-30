import "./index.css";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from "./component/About";
import Login from './component/Login';
import Registration from './component/Registration';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks =async() => {
      const taskFromServer =await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  },[])

  //fetch task
  const fetchTasks = async() => {
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()

    return data;
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Routes>
      <Route path='/' element={
            <Login/>
        }
        />
          <Route path='/registration' element={<Registration/>} />
        <Route path='/addtask' element={
          <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
      </>
        }
        />
      <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};
export default App;
