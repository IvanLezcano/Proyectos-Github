const suma = require("./suma")


it("descripcion de lo que hace un test",() =>{
    const resultado = suma(1,2);
    expect(resultado).toBe(3)
})


it("asignacion de un objeto",() =>{
    const objeto = {};
    expect(objeto).toEqual({})
})
/*a diferencia del toBe el toEqual se usa ya que los objetos suelen ser distintos
aunque parezcan iguales y el equal nos dice si son lo mismo, pero no EL mismo
*/


describe("verdaderito o falsito", () =>{
    it("null",() =>{
        const n = null;
        expect(n).toBeTruthy() /*tobefalsy*/
        /*expect(n).not.tobefalsy*/
        /*expect(n).toBeNull*/
        /*expect(n).toBeUndefined*/
    })
})


describe("numeros", () =>{
    it("agregar dos numeros",() =>{
        const valor = 2 + 2;
        expect(valor).toBe(4)
        expect(valor).toBeGreaterThan(3)
        expect(valor).toBeGreaterThanOrEqual(4)
        expect(valor).toBeLessThan(3)
        expect(valor).toBeLessThanOrEqual(4)


    })
    it("los flotantes!",() =>{
        const valor = 0.2 + 0.2;
        expect(valor).toBeColsedTo(0.4)
      
    })
   
})

describe("teoria de cuerdas", () =>{
    it("no esta batman",() =>{
        const valor = 2 + 2;
        expect("batman").toMatch(/batman/)
        
    })
   
})