import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddTodo } from './MyComponents/AddTodo';
import { Home } from './MyComponents/Home';

function App() {
  // let containerStyle = {
  //   minHeight: '529px', 
  //   maxHeight: '529px', 
  //   overflowY: 'scroll',
  //   border: '1px solid #ddd',
  // }; 

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
  };

  const router = createBrowserRouter([
    {
      path: '/add-todo',
      element: <><Header title="My Todo List"/><AddTodo /></>,
    },
    {
      path: '/todo',
      element: <><Header title="My Todo List"/><Todos todos={todos} onDelete={onDelete}/></>,
    },
    {
      path: '/',
      element: <><Header title="My Todo List"/><Home/></>,
    }
  ]);
  
  return (
    <div className="App">
      {/* <Header title="My Todo List"/> */}
      <RouterProvider router={router} />
      {/* <Todos todos={todos} onDelete={onDelete}/> */}
      <Footer/>
    </div>
  );
}

export default App;
