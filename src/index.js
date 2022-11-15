import './style.scss'

import {Ship} from './ship'
import { GameBoard } from './gameboard'
import { DrawGrid } from './display'




var re = /[a]\d?/;
var pattern = /[j]\d?/;



const player1 = new GameBoard();
player1.createBoard()
console.log(player1)
let playerTurn = true;
var count = 0;
DrawGrid();
function placeShip ()  {

document.querySelector('body').addEventListener('click', function(event){

var othermatch = pattern.exec(event.target.id)
var match = re.exec(event.target.id)
if(othermatch || match){
  return;
}

  const infront = (player1.getCoord(player1.getIndex(event.target.id) + 1))
  const behind = (player1.getCoord(player1.getIndex(event.target.id) - 1))
if(player1.Board[player1.getIndex(event.target.id)]   !== undefined){
  if(infront == undefined || behind == undefined){
    return
  }
 console.log(infront)
 console.log(behind)

 if(infront === 'p1' || behind === 'p1'){
  alert('invalid placement')
  return;
}
event.target.style.backgroundColor = 'green'
document.querySelector('#' + infront).style.backgroundColor = 'green';
document.querySelector('#' + behind).style.backgroundColor = 'green'


}



const ship = new Ship(behind,event.target.id,infront);
player1.Board[player1.getIndex(event.target.id)] = 'p1'
player1.Board[player1.getIndex(infront)] = 'p1'
player1.Board[player1.getIndex(behind)] = 'p1'

  console.log(player1)
  console.log(ship)
  count++;
  console.log(count)
  
    playerTurn = false;
    console.log(playerTurn)
  
  
})
}


if(playerTurn){
  placeShip()
}
else
alert('u done')
if(playerTurn == false){
  console.log('yo')
}

