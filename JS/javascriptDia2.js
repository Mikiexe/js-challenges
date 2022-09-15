let decision = prompt("Que quieres hacer?");

numero1 = parseInt(prompt("Dime tu primer numero: "));
numero2 = parseInt(prompt("Dame tu segundo numero: "));




if (decision == "sumar") {
    funcionSumar(numero1, numero2);

} else if (decision == "restar") {

    funcionRestar(numero1, numero2);

} else if (decision == "multiplicar") {

    funcionMultiplicar(numero1, numero2);

} else if (decision == "dividir"){

    funcionDividir(numero1, numero2);
}else {
    alert("No has seleccionada ninguna opción!");
}



function funcionSumar(num1, num2) {

    let resultado = num1 + num2;
    console.log("El resultado de la suma es " + resultado);

}

function funcionRestar(num1, num2) {

    let resultado = num1 - num2;
    console.log("El resultado de la resta es " + resultado);

}

function funcionMultiplicar(num1, num2) {
    resultado = num1 * num2;
    console.log("El resultado de la multiplicación es " + resultado);
}

function funcionDividir(num1, num2) {
    resultado = num1 / num2;
    console.log("El resultado de la división es " + resultado);
}
