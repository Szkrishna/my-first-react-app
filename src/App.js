import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
// import { AddTodo } from './MyComponents/AddTodo';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish homework',
      description: 'Complete math and science assignments',
      completed: false,
      dueDate: '2024-07-15',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Grocery shopping',
      description: 'Buy milk, eggs, and bread',
      completed: false,
      dueDate: '2024-07-10',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Exercise',
      description: 'Go for a 30-minute jog',
      completed: true,
      dueDate: '2024-06-28',
      priority: 'Low',
    }
  ]);

  const onDelete = (todo)=>{
    alert("The item " + todo.title + " is deleted.");
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  return (
    <div className=" App">
      <Header title="My Todo List"/>
      {/* <AddTodo /> */}
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
