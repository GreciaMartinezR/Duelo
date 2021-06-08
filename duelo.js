class Card{
    constructor (name,cost){
        this.name=name;
        this.cost=cost;
    } 
}

class Unid extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        if (target instanceof Unid){
            target.res -= this.power;
                if (target.res -= 0){
                    console.log(`Has sido eliminado ${target.name} por ${this.name}`)
                }
        }
        else{
            throw new Error( "Target debe ser una unidad!" );
        }
    }
}

class Effect extends Card{
    constructor(name,cost,texto,stat,magnitud){
        super(name,cost);
        this.texto=texto;
        this.stat=stat;
        this.magnitud=magnitud;
    }

    play(target) {
            if( target instanceof Unid ) {
                target[this.stat] += this.magnitud
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
}
const NinjaRojo = new Unid ("Ninja Cinturon Rojo", 3,3,4)
//console.log(NinjaRojo)

const NinjaNegro = new Unid ("Ninja Cinturon Negro", 4,5,4)
//console.log(NinjaNegro)

const algoritmoDuro = new Effect ("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "res", 3)
//console.log(algoritmoDuro)

const rechazoPromesa = new Effect ("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "res", 2)
//console.log(rechazoPromesa)

const programacionPareja = new Effect ("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "power", 2)
//console.log(programacionPareja)

algoritmoDuro.play(NinjaRojo)

rechazoPromesa.play(NinjaNegro)

programacionPareja.play(NinjaRojo)

NinjaRojo.attack(NinjaNegro)

console.table({NinjaRojo, NinjaNegro})
