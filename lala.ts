class Persona{
  
    _fuerza:number;
    _resistencia:number;
    constructor( fuerza:number,  resistencia:number) { 
        this._fuerza=fuerza
        this._resistencia=resistencia
    }

    get fuerza(){
        
        return this._fuerza
    }

    get resistencia():number{
       return this._resistencia
    }


   poder(){
    return this._resistencia*this._fuerza
   }
   recibirDaño(cantidadDeDaño:number){
     this._resistencia=Math.max(this._resistencia-cantidadDeDaño,0)

   }
   recuperarResistencia(resistenciaARecuperar:number){
    this._resistencia=this._resistencia+resistenciaARecuperar

  }
   aumentarFuerza(cantidadDeFuerza:number){
    this._fuerza=this._fuerza+cantidadDeFuerza

  }
   tomarPocion(pocion:Pocion) {
    pocion.afectarA(this)

}

     estaFueraDeCombate() {
        return this.resistencia === 0;
    }
}

interface Ingrediente{
    afectarA(persona:Persona):void;
}

class Pocion{
    _ingredientes:Ingrediente[];
    
    cantidadDeIngredientes():number{
        return this._ingredientes.length
    }

    constructor( ingredientes:Ingrediente[]) { 
        this._ingredientes = ingredientes
    }
    afectarA(persona:Persona):void{
        this._ingredientes.forEach(ingrediente => {
            ingrediente.afectarA(persona)
        });
    }
}


class DulceDeLeche implements Ingrediente{

   afectarA(persona:Persona){
   
   
    persona.aumentarFuerza(10)
    if(persona.estaFueraDeCombate()){
        persona.recuperarResistencia(2)
    }}

}

class PuñadoDeHongos implements Ingrediente{
    _cantidadDeHongos:number;

    constructor( cantidadDeHongos:number) { 
        this._cantidadDeHongos = cantidadDeHongos
    }
    afectarA(persona:Persona){
    
    
        persona.aumentarFuerza(this._cantidadDeHongos)
        if(this._cantidadDeHongos>5){
            persona.recibirDaño(persona._resistencia/2)

        }
 
 }}

 class Grog implements Ingrediente{
   
    afectarA(persona:Persona){
        persona.aumentarFuerza(1)
 }}
 class GrogXD implements Ingrediente{
   
    afectarA(persona:Persona){
        persona.aumentarFuerza(1)
        persona.recuperarResistencia(persona.resistencia) }}

let pepe = new Persona(10,10)
let pocimafalopa =new Pocion([new Grog()]);

pepe.tomarPocion(pocimafalopa)
console.log(pepe.resistencia)
