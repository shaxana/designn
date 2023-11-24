import { useState } from "react";
import TodoApp from "./TodoApp";
function App() {
  let [count, setCount] = useState(0)
  return (
   <TodoApp/>
  );
}

export default App;
