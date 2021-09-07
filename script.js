class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;        
    }

    distancia(puntosig){
        let tx=Math.pow(puntosig.x - this.x,2);
        let ty=Math.pow(puntosig.y - this.y,2);
        return Math.sqrt(tx + ty);
    }

    text(){
        return"(" + this.x + "," + thix.y + ")"
    }  
}

class Pendiente{
    constructor(){
        this.puntos = new Array();
    }

    agregar(Punto){
        this.puntos.push(punto);
    }

    distancia(){
        let td = 0;
        for (let i = 0; i < this.puntos.length-1; i++){
            td += this.puntos[i].distancia(this.puntos[i+1]);
        }
        return td
    }
}