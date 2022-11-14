import './style.scss'

class Ship {
    constructor(length)
    {
        this.length = length;
        this.HP = this.length;
        this.dmgTaken = 0;
        this.alive = true;
    }
    hit(){
        
        this.dmgTaken++;
        return this.HP--;
        
    }

    isSunk(){
        if(this.HP == 0){
            this.alive = false;
            return true;
        }
        return false;
    }
}

class GameBoard {
    constructor(ship,Coord){
        this.ship = new Ship(5)
        Coord = [0,0]
    }
}

player1 = GameBoard(ship1, [0,2])

const ship1 = new Ship(5)


ship1.hit()

console.log(ship1)

