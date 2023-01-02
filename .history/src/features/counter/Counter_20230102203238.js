import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  // read from the Redux store
  const items = useSelector((state) => state.items);

  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatching an action on click
    dispatch({ type: "count/increment" });
  }

  function handleMinusClick() {
    // dispatching an action on click
    dispatch({ type: "count/decrement" });
  }

  return (
    <div className="">
      <button onClick={handleOnClick}>Click</button>
      <button onClick={handleMinusClick}>Minus Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;