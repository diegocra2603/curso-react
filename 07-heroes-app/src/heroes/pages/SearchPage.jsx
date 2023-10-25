import React from 'react'
import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const { formState, onInputChange, onResetForm } = useForm({
    searchText: ''
  })

  const { searchText } = formState

  const onSearchSubmit = (e) => {
    e.preventDefault()

    if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)

    onResetForm()
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={(e) => onSearchSubmit(e)}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control bg-dark text-ligth"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off" />
            <button
              className="btn btn-outline-primary mt-2" type='submit'>
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with  <b>{q}</b>
          </div>

          {
            heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
          }

          {/* <HeroCard/> */}

        </div>
      </div>

    </>
  )
}
