import React from 'react'
import { useState } from 'react'

export default function Form({ getTickets }) {
  const [numOfGames, setNumOfGames] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    getTickets(numOfGames)
  }

  function handleChange(e) {
    setNumOfGames(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Generate tickets</h2>
      <input
        required
        type="text"
        maxLength={2}
        id="num-of-games"
        value={numOfGames}
        name="num-of-games"
        placeholder="Number of games (max: 13)"
        onChange={(e) => handleChange(e)}
      />
      <button>Get tickets</button>
    </form>
  )
}
