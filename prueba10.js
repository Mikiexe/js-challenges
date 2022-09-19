let numeroVentas = parseInt(prompt("Introduce el numero de ventas: "));
console.log(numeroVentas);
const arrayVentas = [];

for (let i = 0; i < numeroVentas; i++) {

    // prompt("Precio de venta " + i + ":");
    arrayVentas[i] = prompt("Precio de venta " + i + ":");
    console.log(i);

}
console.log(arrayVentas);


// Forma simplificada de sumar articulos


// let numeroVentas = parseInt(prompt("Introduce el numero de ventas: "));
// let ventasTotal = 0;

// for (let i = 0; i < numeroVentas; i++) {
//     ventasTotal += parseInt(prompt("Dime el precio del articulo " + i + ";"));

// }

// console.log(ventasTotal)