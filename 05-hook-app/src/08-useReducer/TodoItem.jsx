import React from 'react'

export const TodoItem = ({ id, description, done, onDelete, onToggleTodo }) => {

    const generlasClassTodo = "list-group-item d-flex justify-content-between p-2 gap-4 align-items-center"

    const classTodo =  done ? ` ${generlasClassTodo} alert alert-warning` : ` ${generlasClassTodo} alert alert-success`
    
    return (
        <li className="list-group-item d-flex justify-content-between p-2 gap-4 align-items-center">
            <span
                onClick={() => onToggleTodo({ id, done: !done, description })}
                className={`text-center cursor-pointer ${done ? 'text-decoration-line-through' : ''}`}
            >{description}</span>
            <button
                className="btn btn-danger"
                onClick={() => onDelete({ id })} >Borrar</button>
        </li>
    )
}
