import './style.scss'

import {Ship} from './ship'
import { GameBoard } from './gameboard'
import { DrawGrid } from './display'








const player1 = new GameBoard();
player1.createBoard()
console.log(player1)


DrawGrid();

const placeShip = () => {
document.querySelector('body').addEventListener('click', function(event){
  
   
  const infront = (player1.getCoord(player1.getIndex(event.target.id) + 1))
  const behind = (player1.getCoord(player1.getIndex(event.target.id) - 1))


event.target.style.backgroundColor = 'green'
document.querySelector('#' + infront).style.backgroundColor = 'green';
document.querySelector('#' + behind).style.backgroundColor = 'green'

const ship = new Ship(behind,event.target.id,infront);
player1.Board[player1.getIndex(event.target.id)] = 'p1'
player1.Board[player1.getIndex(infront)] = 'p1'
player1.Board[player1.getIndex(behind)] = 'p1'


   return ship.coordinate
})
}

placeShip()


