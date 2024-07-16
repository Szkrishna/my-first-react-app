import React from 'react';
import { Todo } from './Todo';

export const Todos = (props) => {
    let containerStyle = {
        minHeight: '529px', 
        maxHeight: '529px', 
        overflowY: 'scroll',
        border: '1px solid #ddd',
    };

    return (
        <div className="todos" style={containerStyle}>
            <h3 className='mt-2'>Todo's List</h3>
            {
                props.todos.length === 0 ? "No todos to show" : props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
