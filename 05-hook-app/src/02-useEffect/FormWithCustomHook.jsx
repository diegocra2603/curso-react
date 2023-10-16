import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: 'diego',
        email: 'diego@gmail.com',
        password: ''
    })

    const { username, email, password } = formState

    return (
        <>
            <h1>Formulario Con CustomHook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                autoComplete="off"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-3"
                placeholder="Email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>

        </>
    )
}
