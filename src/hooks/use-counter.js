import { useState, useEffect } from "react";

function useCounterAndLog(initiLCount) {
  const [count, setCount] = useState(initiLCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
}
export default useCounterAndLog;
