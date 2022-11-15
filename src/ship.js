export class Ship {
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


