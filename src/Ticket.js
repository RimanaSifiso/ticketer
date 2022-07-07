import React from 'react'

function WinBar() {
  return (
    <div className="bar">
      <span className="highlighted">W</span>
      <span>D</span>
      <span>L</span>
    </div>
  )
}

function DrawBar() {
  return (
    <div className="bar">
      <span>W</span>
      <span className="highlighted">D</span>
      <span>L</span>
    </div>
  )
}
function LoseBar() {
  return (
    <div className="bar">
      <span>W</span>
      <span>D</span>
      <span className="highlighted">L</span>
    </div>
  )
}

export default function Ticket({ children }) {
  return <div className="ticket">{children}</div>
}

export { WinBar, DrawBar, LoseBar }
