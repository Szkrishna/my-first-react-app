import React from 'react';

export const Todo = ({ todo, onDelete}) => {
  return (
    <div className="todo">
      <div key={todo.id}>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        {todo.dueDate && <p>Due Date: {todo.dueDate}</p>}
        {todo.priority && <p>Priority: {todo.priority}</p>}
      </div>
      <button type="button" class="btn btn-danger mb-3" onClick={onDelete}>Delete</button>
    </div>
  )
}
