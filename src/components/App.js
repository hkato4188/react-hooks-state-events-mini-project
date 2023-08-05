import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteClick(taskToDelete) {
    const updatedTasks = tasks.filter((t) => t.text !== taskToDelete.text);
    setTasks(() => updatedTasks);
  }

  function handleSelect(e) {
    setSelectedCategory(() => e.target.innerText);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleSelect}
      />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
