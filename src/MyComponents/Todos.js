import React from 'react';
import { Todo } from './Todo';

export const Todos = (props) => {
    return (
        <div className="todos">
            <h3>Todo's List</h3>
            {props.todos.map((todo) => {
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
