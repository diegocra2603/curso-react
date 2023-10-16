import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dieg',
        email: 'diego@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({ ...formState, [name]: value })

    }

    // useEffect(() => {
    //     console.log('Use Effect call')
    // }, [])

    // useEffect(() => {
    //     console.log('Form State Change')
    // }, [formState])

    // useEffect(() => {
    //     console.log('Email Change')
    // }, [formState.email])
    
    return (
        <>
            <h1>Formulario Simple</h1>
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

            { username === 'diego' && <Message /> }

            
        </>
    )
}
