import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  function clickBtn() {
    setCount((current) => current + 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Here's the count!</h3>
      <h3>↓↓↓</h3>
      <button onClick={clickBtn}>Click me!</button>
      <h2>{count}</h2>
    </div>
  );
}
