// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       // return state + 1;
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment } from "./actions";

const CounterInitState = 0;
console.log("increment.type", increment.type);

const counterReducer = createReducer(CounterInitState, {
  [increment.type]: (state, action) => state + 1,
  [decrement.type]: (state, action) => state - 1,
});
export default counterReducer;
