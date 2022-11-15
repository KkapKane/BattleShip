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

export class GameBoard {
    constructor(Board){
        this.Board = Board || [];
    }

    createBoard(){
       for (let i = 0; i < 10 ; i++){
        for(let j = 0; j < 10; j++){
            this.Board.push(m.get(j) + i)
        }
       }
       return this;
}
getIndex(coord){
    
    return (this.Board.indexOf(coord))
   
}
}

