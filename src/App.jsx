import React, { useState } from "react";
import "./App.css";
import Addtask from "./Components/Addtask";
import Taskbar from "./Components/Taskbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // Add filter state

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Function to mark a task as done or pending (undo)
  const markAsDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "done" ? "pending" : "done" }
          : task
      )
    );
  };

  return (
    <div className="app">
      <Addtask setTasks={setTasks} setFilter={setFilter}/>{" "}
      {/* Pass setFilter */}
      <main className="app_main">
        <Taskbar
          tasks={tasks}
          filter={filter}
          removeTask={removeTask}
          markAsDone={markAsDone}
        />
      </main>
    </div>
  );
};

export default App;
