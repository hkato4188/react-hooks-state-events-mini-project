import React, { useState } from "react";

function NewTaskForm({ categories, tasks, setTasks }) {
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  function handleAddNewTaskSubmit(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        text: newTaskDetails,
        category: newTaskCategory,
      },
    ]);
  }

  const categoryOptions = categories.map((category) => {
    if (category !== "All") {
      return (
        <option
          key={category}
          value={newTaskCategory}
          onChange={(e) => setNewTaskCategory(e.target.value)}
        >
          {category}
        </option>
      );
    }
  });
  return (
    <form className="new-task-form" onSubmit={handleAddNewTaskSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTaskDetails}
          onChange={(e) => setNewTaskDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category">{categoryOptions}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
