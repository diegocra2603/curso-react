import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter1: {state.counter1}</h1>
            <h1>Counter2: {state.counter2}</h1>
            <h1>Counter3: {state.counter3}</h1>
            <hr />
            <button className="btn btn-light" onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>Counter 1 +1</button>
            <button className="btn btn-light" onClick={() => setCounter({ ...state, counter2: counter2 + 1 })}>Counter 2 +1</button>
            <button className="btn btn-light" onClick={() => setCounter({ ...state, counter3: counter3 + 1 })}>Counter 3 +1</button>
        </>
    )
}
