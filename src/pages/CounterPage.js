import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initiLCount }) {
  // const [count, setCount] = useState(initiLCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if (action.type === "change-value-to-add") {
      return {
        ...state,
        valueToAdd: action.playoad,
      };
    }
    if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initiLCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "change-value-to-add",
      playoad: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg"> count {state.count}</h1>
      <div className="flex flex-row">
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button danger rounded onClick={decrement}>
          Decremnt
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button success>Add it!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
