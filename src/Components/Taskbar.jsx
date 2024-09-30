import React from "react";
import "./Taskbar.css";

const Taskbar = ({ tasks, filter, removeTask, markAsDone }) => {
  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p>No tasks available. Add Tasks</p>
      ) : (
        filteredTasks.map((task,index) => (
          <article key={task.id} className="task_bar">
            <div className="task_title">
              <h3
                className={`task_name ${
                  task.status === "done" ? "done_task" : "undo_task"
                }`}
              >
                {`${index+1}${"."} ${task.text}`}
              </h3>
            </div>
            <div className="task_buttons">
              <button className="done" onClick={() => markAsDone(task.id)}>
                {`${task.status === "done" ? "Undo" : "Done"}`}
              </button>
              <button className="remove" onClick={() => removeTask(task.id)}>
                Remove
              </button>
            </div>
          </article>
        ))
      )}
    </>
  );
};

export default Taskbar;
