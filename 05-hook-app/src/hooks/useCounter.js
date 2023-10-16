import { useRef, useState } from "react"

export const useCounter = (initialValue = 10) => {

    const firstValue = useRef(initialValue)

    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        setcounter(counter + value)
    }

    const reset = () => {
        setcounter(firstValue.current)
    }

    const degrade = (value = 1) => {

        if (counter - value <= 0) return

        setcounter(counter - value)
    }

    return {
        counter,
        increment,
        reset,
        degrade,
    }
}