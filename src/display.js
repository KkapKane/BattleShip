

var m = new Map()

m.set(0,'a')
m.set(1,'b')
m.set(2,'c')
m.set(3,'d')
m.set(4,'e')
m.set(5,'f')
m.set(6,'g')
m.set(7,'h')
m.set(8,'i')
m.set(9,'j')



export function DrawGrid(){
  for(let i = 0; i < 10; i++){
 
  
   var gameboardDiv = document.querySelector('.GameBoardDiv'); 
  var Divcontainer = document.createElement('DivContainer');
    
for(let j = 0 ; j < 10; j++){
  var space = document.createElement('Spacediv')
  space.setAttribute('id', m.get(j) + i)
  space.textContent = m.get(j) + i
    Divcontainer.appendChild(space)

}
    
    gameboardDiv.appendChild(Divcontainer)
    
}
}


