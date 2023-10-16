import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

    const { todos, onNewTodo, onDeleteTodo, onUpdateTodo, todosCount, pendingTodosCount } = useTodo()

    return (
        <>
            <h1>TodoApp ({todosCount}) <small>Pendientes: {pendingTodosCount}</small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} onDelete={onDeleteTodo} onToggleTodo={onUpdateTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>

            </div>

        </>
    )
}
