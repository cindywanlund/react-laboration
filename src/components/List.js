import React from "react"

export const List = ({ films }) => {
  return (
    <div>
        <h1>List</h1>
        <ul>
            {films.map(movie => {
                return <li key={movie.title} key={movie.release_date}>{movie.title} {movie.release_date}</li>
            })}
        </ul>
    </div>
  )
}