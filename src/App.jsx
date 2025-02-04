import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Get initial count value from localStorage or default to 0
  const storedCount = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
  const [count, setCount] = useState(storedCount);

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Background color should adjust without affecting text visibility
  const backgroundColorLevel = Math.min(count * 10, 255); // Adjust this as needed
  const backgroundStyle = {
    background: `rgba(0, 0, 0, ${backgroundColorLevel / 255})`, // Start from white to transparent dark
    transition: "background 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)", // Bezier curve effect
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "red", // Ensure text remains white for visibility
  };

  return (
    <div style={backgroundStyle}>
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
