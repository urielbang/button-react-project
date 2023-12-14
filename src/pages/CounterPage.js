import { useState, useEffect } from "react";
import Button from "../components/Button";
function CounterPage({ initiLCount }) {
  const [count, setCount] = useState(initiLCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> count {count}</h1>
      <Button secondary rounded onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
}
export default CounterPage;
