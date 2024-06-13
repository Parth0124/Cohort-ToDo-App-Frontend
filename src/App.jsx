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
     {todos.map((todo) => {
      return <Todo title= {todo.title} description= {todo.description} id={todo.id} />
     })}
    </>
  );
}

function Todo(props)
{
  return(
  <>
    {props.id}
    )
    {props.title} 
    : 
    {props.description}
    <br />
  </>
  );
}

export default App;
