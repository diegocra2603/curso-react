import { useEffect, useRef } from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({ onNewTodo }) => {

    const inputRef = useRef()

    const { formState, onInputChange, onResetForm } = useForm({
        id: new Date().getTime(),
        description: "",
        done: false
    })

    const { description } = formState

    const onSubmit = (event) => {
        event.preventDefault();

        if(description.length <= 1 ) return;

        onNewTodo(formState)

        onResetForm()

        inputRef.current.focus()
    }

    const disableButton = () => description.trim().length <= 0

    return (
        <form onSubmit={(event) => onSubmit(event)} autoComplete='off' >
            <input
                ref={inputRef}
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={(event) => onInputChange(event)} />

            <button disabled={disableButton()} type="submit" className="btn btn-outline-primary mt-2">Agregar </button>
        </form>
    )
}
