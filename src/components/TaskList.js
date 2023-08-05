import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteClick, selectedCategory }) {
  const filteredTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });
  const renderedTasks = filteredTasks.map((task, index) => {
    return (
      <Task key={index} onDelete={() => handleDeleteClick(task)} {...task} />
    );
  });

  return <div className="tasks">{renderedTasks}</div>;
}

export default TaskList;
