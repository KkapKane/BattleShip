export class Ship {
    constructor(...coordinate)
    {
        this.length = 3;
        this.HP = this.length;
        this.dmgTaken = 0;
        this.alive = true;
        this.coordinate = coordinate;
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


