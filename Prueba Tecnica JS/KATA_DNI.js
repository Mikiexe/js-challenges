alert("Confirma tu DNI: ")
let numerosDni = parseInt(prompt("Introduce los numeros de tu DNI: "));
let letraDni = prompt("Introduce la letra final de tu DNI: ");


console.log("Tenemos el valor de la variable numerosDni: " + numerosDni);
console.log("Tenemos el valor de la var letraDni: " + letraDni);
let arrayDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];



if (numerosDni) {

    let posicionLetra = numerosDni % 23;
    console.log("El modulo de numeroDni es: " + posicionLetra);

    if (arrayDni[posicionLetra] == letraDni) {
        console.log("Tu DNI es valido! Enhorabuena");

    } else {
        console.log("Tu DNI es Invalido. Contacta con tu Ayuntamiento. ");
    }

} else if (numerosDni === NaN) {

    console.log("No se ha introducido un numero válido! Vuelva a intentarlo");

} else (

    console.log("Ha habido un error en su consulta, consulte con su administrador local")

)

