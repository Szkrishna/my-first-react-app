import React from 'react';
import { Todo } from './Todo';

export const Todos = (props) => {
    const containerStyle = {
        minHeight: '528px', 
        maxHeight: '528px', 
        overflowY: 'scroll',
        border: '1px solid #ddd',
      };

    return (
        <div className="todos" style={containerStyle}>
            <h3>Todo's List</h3>
            {props.todos.map((todo) => {
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
