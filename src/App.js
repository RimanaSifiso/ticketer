import Form from './Form'
import Ticket, { WinBar, LoseBar, DrawBar } from './Ticket'

import TicketsContect, { TicketContext } from './Context'
import { useContext } from 'react'

export default function App() {
  const { getTickets, tickets, deleteTickets } = useContext(TicketsContect)

  return (
    <TicketContext>
      <header>
        <h1>Ticketer</h1>
        <button onClick={deleteTickets}>Clear tickets</button>
        <h4>
          <em>Tickets generated: {tickets.length}</em>
        </h4>
      </header>
      <main>
        {tickets.length > 0 ? (
          <div className="tickets">
            {tickets.map((ticketBar, i) => (
              <Ticket key={i}>
                {ticketBar.map((item, k) => {
                  if (item === 'W') return <WinBar key={k**Math.random()} />
                  if (item === 'D') return <DrawBar key={k ** Math.random()} />
                  if (item === 'L') return <LoseBar key={k ** Math.random()} />
                })}
              </Ticket>
            ))}
          </div>
        ) : (
          <Form getTickets={getTickets} />
        )}
      </main>
    </TicketContext>
  )
}
