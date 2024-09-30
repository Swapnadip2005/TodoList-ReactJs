import React, { useState } from "react";
import "./Addtask.css";

const Addtask = ({ setTasks, setFilter }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      id: Date.now(),
      text: task,
      status: "pending",
    };

    setTasks((prevTasks) => [...prevTasks, taskData]);
    setTask("");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update the filter state when a new option is selected
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Add a task"
          value={task}
          onChange={handleTaskChange}
          required
        />
        <button type="submit" className="task_submit">
          Add Task
        </button>
        <select className="task_status" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
      </form>
    </header>
  );
};

export default Addtask;
