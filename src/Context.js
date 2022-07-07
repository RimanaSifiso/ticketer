import { createContext, useState } from 'react'
import retrieveTickets from './tickets'

const TicketsContect = createContext()

export function TicketContext({ children }) {
  const [tickets, setTickets] = useState([])

  
  function getTickets(numOfGames) {
    console.log(retrieveTickets(numOfGames))
    
    const data = retrieveTickets(numOfGames)
    setTickets(data)

    console.log(tickets)
  }

  function deleteTickets() {
    setTickets('')
  }

  return (
    <TicketsContect.Provider value={{ deleteTickets, getTickets, tickets }}>
      {children}
    </TicketsContect.Provider>
  )
}
export default TicketsContect
