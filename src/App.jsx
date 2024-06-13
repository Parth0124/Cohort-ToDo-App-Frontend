import { useState } from "react"

// var todos = [
// {
//   title:"GO to gym",
//   description: "Hit the gym and grind",
//   id: 1
// },
// {
//   title: "Go eat lunch",
//   description: "You are hungry go eat food",
//   id: 2
// }]


function App() {
  const [todo, setTodo] = useState({
    title:"GO to gym",
    description: "Hit the gym and grind",
    id: 1
})

setInterval(() => {
  setTodo({
    title: "Workout",
    description: "Cardio time",
    id: 100
  })
}, 2000)

  return (
    <>
      <h1>Hi There!!</h1>
      {todo.title}
      {todo.description}
      {todo.id}
    </>
  )
}

export default App
