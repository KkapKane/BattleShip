import './style.scss'

import {Ship} from './ship'
import { GameBoard } from './gameboard'
import { DrawGrid } from './display'






const ship1 = new Ship(5)

const player1 = new GameBoard();
player1.createBoard()
console.log(player1)
ship1.hit()

DrawGrid();

document.querySelector('body').addEventListener('click', function(event){
event.target.style.backgroundColor = 'red'
player1.Board[player1.getIndex(event.target.id)] = 'X'
console.log(player1.Board)

})
   


console.log(ship1)

