const sampleSpace = ['W', 'D', 'L']

function generateCombinations(numberOfGames) {
  const possibleCombinations = 3 ** numberOfGames
  const combinations = []

  function getPattern(n_print) {
    const pattern = []

    for (let i = 0; i < sampleSpace.length; i++) {
      for (let k = 0; k < n_print; k++) {
        pattern.push(sampleSpace[i])
      }
    }

    return pattern.join('')
  }

  for (let k = 1; k <= numberOfGames; k++) {
    let container = []

    let divisor = possibleCombinations / 3 ** k
    let n_print = 3 ** (k - 1)
    for (let i = 1; i <= divisor; i++) {
      container.push(getPattern(n_print))
    }
   
    combinations.push(container.join('').split())
  }

  return combinations
}

function getTickets(combinations) {
  const ticketLength = combinations.length

  let numberOfGames = [...combinations[0][0]].length
  
  const tickets = []

  for (let i = 0; i < numberOfGames; i++) {
    let ticket = []

    for (let k = 0; k < ticketLength; k++) {
      ticket.push([...combinations[k][0]][i])
    }

    tickets.push(ticket)
    ticket = []
  }

  return tickets
}

function retrieveTickets(n) {
  return getTickets(generateCombinations(n))
}


export default retrieveTickets