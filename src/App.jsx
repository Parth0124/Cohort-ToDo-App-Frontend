import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to gym from 5 to 7",
      id: 1
    },
    {
      title: "Class",
      description: "Go to Class from 8 to 9",
      id: 2
    }
  ]);

  return (
    <>
      <h1>Hi There!!</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.id}</p>
        </div>
      ))}
    </>
  );
}

export default App;
