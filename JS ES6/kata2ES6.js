alert("Genera un numero aleatorio!");
let qtyNumeros = parseInt(prompt("Cuantos numeros quieres generar?"));
let limiteStart = parseInt(prompt("Introduce el mínimo de tu valor:"));
let limiteEnd = parseInt(prompt("Introduce el maximo de tu numero aleatorio:"));


const genNumber = (start, end) => {

    let randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
    return randomNumber;
}


console.log("Cantidad de numeros: " + qtyNumeros)
console.log("Numero minimo: " + limiteStart);
console.log("Numero maximo: " + limiteEnd);
console.log("----------------------------");

let numerosGenerados = 0;

while (numerosGenerados < qtyNumeros) {

    let numeroAleatorio = genNumber(limiteStart, limiteEnd);
    console.log(numeroAleatorio);
    numerosGenerados++;

}



