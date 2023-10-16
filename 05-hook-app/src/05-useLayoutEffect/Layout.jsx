import { useCounter, useFetch } from "../hooks"
import { ListQuotes, LoadingQuote } from "../03-example"

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    // const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next Quote</button>
            <hr />

            {isLoading && <LoadingQuote />}

            <ListQuotes data={data} />

        </>
    )
}
