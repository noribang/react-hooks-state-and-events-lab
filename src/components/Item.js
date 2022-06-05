import React, { useState } from "react";

function Item({ name, category }) {
  /* Create state variable.
     Call useState with initial value.
     Then array destructure state value and state setter function. */
  const [inCart, setInCart] = useState(false);
  /* Event handler.
     Call setState.*/
  function handleClick() {
    console.log(`before click: ${inCart}`)
    setInCart((inCart) => !inCart);
    console.log(`after click: ${inCart}`)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
