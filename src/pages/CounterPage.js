import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCEMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

function CounterPage({ initiLCount }) {
  // const [count, setCount] = useState(initiLCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case INCEMENT_COUNT:
        state.count = state.count + 1;
        return;
      case SET_VALUE_TO_ADD:
        state.valueToAdd = action.playoad;
        return;
      case DECREMENT_COUNT:
        state.count = state.count - 1;
        return;
      case ADD_VALUE_TO_COUNT:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;

        return;
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initiLCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCEMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      playoad: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
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
