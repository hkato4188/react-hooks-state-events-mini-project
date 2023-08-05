import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const renderedButtons = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={onCategorySelect}
        className={selectedCategory === category ? "selected" : ""}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderedButtons}
    </div>
  );
}

export default CategoryFilter;
