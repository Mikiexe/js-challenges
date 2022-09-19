let numeroPar = parseInt(prompt("Dame un numero para comprobar si es par: "));

let resultado = numeroPar % 2;

if (numeroPar % 2 == 0) {
    console.log("Tu numero es par, es decir que el resto es 0.");

} else {
    console.log("Tu número no es par.");
}