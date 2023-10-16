import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, reset, degrade } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-light" onClick={() => increment(10)}>+1</button>
            <button className="btn btn-light" onClick={() => reset()}>Reset</button>
            <button className="btn btn-light" onClick={() => degrade(7)}>-1</button>
        </>
    )
}
