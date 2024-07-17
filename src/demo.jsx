import React, { useState, useEffect } from "react";
import Nav from "./Navigation";

function CounterUse() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Component mounted or count changed to: ${count}`);
    return () => {
      console.log("Component unmounted ot cound changed. Cleaning up...");
    };
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="bg-[url('C:\Users\acer\Desktop\task\react\Wandermate\src\assets\bgmt.jpg')] h-screen bg-cover">
        <Nav />
        <h1>Count: {count}</h1>
        <button onClick={increment}>Count</button>
      </div>
    </>
  );
}

export default CounterUse;
