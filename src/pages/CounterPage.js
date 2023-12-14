import useCounterAndLog from "../hooks/use-counter";
import Button from "../components/Button";

function CounterPage({ initiLCount }) {
  const { count, increment } = useCounterAndLog(initiLCount);
  return (
    <div>
      <h1> count {count}</h1>
      <Button primary rounded onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
export default CounterPage;
