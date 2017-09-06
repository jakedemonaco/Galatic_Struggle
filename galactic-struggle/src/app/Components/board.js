/**
 * This class allows you to create a Game Board with a configurable, 
 * underlying grid. 
 * 
 * You'll want to figure out what kinds of details go into updateBoard (!)
 */
class GameBoard {
  constructor (defaultWidth = 4, defaultHeight = 6) {
    // 1. Create grid
    this.grid = []
    for (let i = 0; i < defaultHeight; i += 1) {
      this.grid.push(Array(defaultWidth).fill())
    }

    // 2. Create array to save previous states
    this.prevStates = []
  }
  displayBoard = () => {
    console.log(JSON.stringify(this.grid, null, 2))
  }
  // TODO: Fill out this method!
  updateBoard = (playerOneCard, playerTwoCard) => {
    // 1. Create a copy of this.grid

    // 2a. Update the COPY of the grid with the new cards, etc.

    // 2b. Update any other state: Update player energies

    // 3. Once you're sure your updated copy is final...
      // 3a. ...Save the current grid into your list of past states: 
      this.prevStates.push(this.state)
      // 3b. ...And then set this.grid = copiedGrid
  
    // X. For debugging purposes
    this.displayBoard()
  }
}

module.exports = GameBoard