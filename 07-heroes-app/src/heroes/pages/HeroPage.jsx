import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export const HeroPage = () => {

  const { heroId } = useParams()

  const hero = getHeroById(heroId)

  if (!hero) return <Navigate to="/marvel" />


  console.log(hero)

  return (
    <h1>HeroPage</h1>
  )
}
