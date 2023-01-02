import React from "react";
import ReactDOM from "react-dom";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
