import { useState } from 'react'

export default function Form({ getTickets }) {
  const [numOfOutcomes, setNumOfOutcomes] = useState('3')
  const [game, setGame] = useState('six')
  const [order, setOrder] = useState('any')
  const [outcome, setOutcome] = useState('W')

  function handleSubmit(e) {
    e.preventDefault()

    getTickets(game, outcome, numOfOutcomes, order)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Generate tickets</h2>
      <h3>How many games?</h3>
      <div className="input-group">
        <input type="radio" id="six" name="game" value={'6'} />
        <label onClick={() => setGame('6')} htmlFor="six">
          6 games
        </label>
      </div>
      <div className="input-group">
        <input type="radio" id="eight" name="game" value={'8'} />
        <label onClick={() => setGame('8')} htmlFor="eight">
          8 games
        </label>
      </div>
      <h3>What is the outcome you want to lock?</h3>
      <div className="input-group">
        <input type="radio" id="w" name="outcome" value={'W'} />
        <label onClick={() => setOutcome('W')} htmlFor="w">
          Win(s)
        </label>
      </div>
      <div className="input-group">
        <input type="radio" id="d" name="outcome" value={'D'} />
        <label onClick={() => setOutcome('D')} htmlFor="d">
          Draws(s)
        </label>
      </div>
      <div className="input-group">
        <input type="radio" id="l" name="outcome" value={'L'} />
        <label onClick={() => setOutcome('L')} htmlFor="l">
          Lose(s)
        </label>
      </div>
      <h3>How many of the outcome(s) you selected you wish to lock?</h3>
      <input
        type="text"
        name="numOfOutcomes"
        id="numOfOutcomes"
        placeholder="Number of outcomes here..."
        maxLength={'1'}
        onChange={(e) => setNumOfOutcomes(parseFloat(e.target.value))}
      />
      <h3>In which order do you want to lock?</h3>
      <div className="input-group">
        <input type="radio" id="first" name="order" value={'first'} />
        <label onClick={() => setOrder('first')} htmlFor="first">
          First
        </label>
      </div>
      <div className="input-group">
        <input type="radio" id="last" name="order" value={'last'} />
        <label onClick={() => setOrder('last')} htmlFor="last">
          Last
        </label>
      </div>
      <div className="input-group">
        <input type="radio" id="any" name="order" value={'any'} />
        <label onClick={() => setOrder('any')} htmlFor="any">
          Any
        </label>
      </div>

      <button>Get tickets</button>
    </form>
  )
}
