import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/actions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state)
    return state.counter
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>Learning redux</p>
        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          // onDecrement={() =>
          //   dispatch({
          //     type: "DECREMENT",
          //   })
          // }
          onDecrement={() => dispatch(decrement())}
        />
      </header>
    </div>
  );
}

export default App;
