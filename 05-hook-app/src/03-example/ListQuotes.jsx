import React from 'react'
import { Quote } from './Quote'

export const ListQuotes = ({data}) => {
  return (
    data?.map((data, index) => (
        <Quote key={index} {...data} />
    ))
  )
}
