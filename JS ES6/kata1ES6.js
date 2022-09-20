
let figura = prompt("Que figura quieres calcular: circulo, triangulo o cuadrado? ").toLowerCase();


const Circulo = (r) => {
    let areaCirculo = ((r ** 2) * Math.PI);
    return areaCirculo;
}

const Triangulo = (base, altura) => {
    let areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
}

const Cuadrado = (lado) => {
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}



switch (figura) {

    case "circulo":
        let radio = parseInt(prompt("Introduce el radio de tu círculo!"));
        let areaCirculo = parseInt(Circulo(radio));
        console.log("El area de tu circulo es " + areaCirculo);
        break;

    case "triangulo":
        let base = parseInt(prompt("Introduce la base de tu triangulo!"));
        let altura = parseInt(prompt("Ahora, introduce la altura de tu triangulo!"));
        let areaTriangulo = Triangulo(base, altura);
        console.log("El area de tu triangulo es " + areaTriangulo);
        break;


    case "cuadrado":
        let lado = parseInt(prompt("Introduce el lado de tu cuadrado!"));
        let areaCuadrado = Cuadrado(lado);
        console.log("El area de tu cuadrado es " + areaCuadrado);
}


