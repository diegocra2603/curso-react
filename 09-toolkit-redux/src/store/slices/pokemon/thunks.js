import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPokemons())

        //TODO: Realizar peticion http
        const { data : { results } } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json()

        dispatch(setPokemons({ pokemons : results, page: page + 1}))

    }
}