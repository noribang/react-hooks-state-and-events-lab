import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // console.log("items: ", items)
  /* Create state variable.
     Call useState with initial value.
     Then array destructure state value and state setter function. */
    const [selectedCategory, setSelectedCategory] = useState("All");  

  /* Event handler for select option elements. 
     Changes setState setSelectedCategory(). */
  function handleFilterChange(event) {
    console.log(event.target.value);
    // Update setter function 
    setSelectedCategory(event.target.value)
    // console.log(selectedCategory);
  }

  /* Returns new array of items array of objects to display. */
  const itemsToDisplay = items.filter((item) => {
    // If dropdown select value is "All" return 
    // all objects in array to display.
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
