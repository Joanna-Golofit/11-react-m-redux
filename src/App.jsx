import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './reducers/actions';


const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <header className="App-header">
        <p>Learning redux</p>
        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          onDecrement={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
        />
      </header>
    </div>
  );
}

export default App;
