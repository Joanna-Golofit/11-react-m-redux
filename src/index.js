import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/index.js";


// cos to nie dziala...
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// const reducers = combineReducers({
//   counterReducer
// });
const store = configureStore({ reducer: { counter: counterReducer } });

// const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
