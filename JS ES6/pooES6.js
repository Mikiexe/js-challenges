

//Definimos la clase hurón (sin simbolos para que evitar errores)

class huron {

    //Dentro del constructor() declaramos los parametros que acepta la clase y la asignación de estos

    constructor(colorHuron, topClothes, bottomClothes, cap) {

        this.topClothes = topClothes,
        this.bottomClothes = bottomClothes,
        this.colorHuron = colorHuron,
        this.cap = cap,
        this.dinero = 0
    }

    //Declaración de metodos que podriamos aceptar dentro del constructor
    cobrarDinero(cantidad) {
        this.dinero += cantidad;
    }
}



let huron1 = new huron("Marrón", "Cami tirantes", "Dickies workpants", "no");

huron1.cobrarDinero(200);
console.log(huron1);
