import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const onNewTodo = (todo) => {
        dispatch({ type: '[TODO] add Todo', payload: todo })
    }

    const onDeleteTodo = (todo) => {
        dispatch({ type: '[TODO] delete Todo', payload: todo })
    }

    const onUpdateTodo = (todo) => {
        dispatch({ type: '[TODO] update Todo', payload: todo })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        onNewTodo,
        onDeleteTodo,
        onUpdateTodo
    }

}
