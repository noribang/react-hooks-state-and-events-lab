import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  /* Create state variable.
     Call useState with initial value.
     Then array destructure state value and state setter function. */
  const [isDark, setIsDark] = useState(false)
  /* Event handler.
     Call setState.*/
  function handleClick() {
    setIsDark((isDark) => !isDark);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
