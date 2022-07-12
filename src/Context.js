import { createContext, useState } from 'react'
import six from './6'
import eight from './8'


const TicketsContect = createContext()

export function TicketContext({ children }) {
  const [tickets, setTickets] = useState([])

  

  function generateTickets(games, outcome, numOfOutcomes, order) {
    let tickets = []

    function countOf(array, item) {
      let count = 0
      array.forEach((arrayItem) => {
        if (arrayItem === item) count++
      })
      return count
    }

    if (games === '8') {
      tickets = eight
    } else {
      tickets = six
    }

    if (numOfOutcomes > tickets[0].length) return 'error'
    if (!outcome || !numOfOutcomes || !order) return tickets
    outcome = outcome.toUpperCase()

    tickets = tickets.filter((ticket) => {
      if (countOf(ticket, outcome) === numOfOutcomes) {
        return ticket
      }
    })

    tickets = tickets.filter((ticket) => {
      if (order === 'first') {
        let tickLog = 0
        for (let o = 0; o < numOfOutcomes; o++) {
          if (ticket[o] === outcome) tickLog++
        }
        if (tickLog === numOfOutcomes) {
          return ticket
        }
      } else if (order === 'last') {
        let tickLog = 0
        for (let o = 0; o < numOfOutcomes; o++) {
          if (ticket[ticket.length - (o + 1)] === outcome) tickLog++
        }
        if (tickLog === numOfOutcomes) {
          return ticket
        }
      } else {
        return ticket
      }
    })

    
    
    return tickets
  }
  
  function getTickets(games, outcome, numOfOutcomes, order) {
    setTickets(generateTickets(games, outcome, numOfOutcomes, order))
  }

  function deleteTickets() {
    setTickets('')
  }

  return (
    <TicketsContect.Provider
      value={{
        deleteTickets,
        
        getTickets,
        tickets,
      }}
    >
      {children}
    </TicketsContect.Provider>
  )
}
export default TicketsContect
