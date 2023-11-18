let Disfraz1={
    name:"spiderman",
    fechaDeConfeccion:"12/12/2005",
    nivelDeGracia:5,
    puntajeDelDisfraz:10,

}

/*aca creo dos disfrazes bien hechos para probar*/
let batman={
  nombre:"spiderman",
  fechaDeConfeccion:"12/12/2015",
  nivelDeGracia:5,
  puntajeDelDisfraz:10,

}
let elcoringa={
  nombre:"coringa",
  fechaDeConfeccion:"12/12/2023",
  nivelDeGracia:5,
  puntajeDelDisfraz(persona){
    return persona.edad>50 ? this.nivelDeGracia*3 : this.nivelDeGracia
  },

}
let fiestaDeMarta = {
  lugar : "villa ortuzar",
  fecha:24/12/2023,
  invitados : [],

}

class Invitado {
    constructor(edad,disfraz,fiesta) {
      this.edad = edad;
      this.disfraz=disfraz
    
    }
  }
/*que exista un disfraz*/
console.log(Disfraz1)
/*que funcione un atributo de la clase*/
let juan = new Invitado(23,Disfraz1,fiestaDeMarta)
console.log(juan.edad)
/*que funcione el objeto que recibe juan*/
console.log(juan.disfraz.name)
/*aca entendi que los disfrazes pueden ser objetos multiples*/
/*que funcione la funcion dentro del objeto*/
let miguel = new Invitado(20,elcoringa,fiestaDeMarta)
console.log(miguel.disfraz.puntajeDelDisfraz(miguel))
/* B) EXITOOO * /
/* Ahora probemos de calcular el puntaje mas si es gracioso dependiendo
de la persona */
let roberto = new Invitado(202,elcoringa,fiestaDeMarta)
console.log(miguel.disfraz.puntajeDelDisfraz(roberto))
/* probando si se pueden comparar fechas */
console.log( 12/12/2023<24/12/2023) /*se puede papaaa*/
/* Ahora probemos de calcular el puntaje mas si es barato dependiendo
de la fecha de la fiesta */



/*


class invitado(disfraz=momia,personalidad=alegre){
    disfraz=disfraz
    personalidad=cambiante
    edad=
    estaciturnasexi?=self.edad<30
    intermcambiartraje(self.disfraz=invitado.disfraz)
    }
    
    class disfraz{
    nombre="asdas"
    fechadeconfeccion="11/12/1997"
    niveldegracia=2
    tobadas=
    caretas
    essexy?(persona.alegre)
    estaconforme?=disfraz.puntaje>10
    puntodeldisfraz()
    
    }
    
    class fiesta{
    asistente=""
    agregarAsistente(invitado)
    lugar
    fecha
    invitados
    fiestaesunbodrio{
    self.invitados map.estaconforme?
    }
    fiestainolvidable map todos confirmes y sexuyes
    }
    
    */