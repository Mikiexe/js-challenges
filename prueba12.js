let pwdSecret = parseInt(Math.random() * (999 - 100) + 100);

console.log(pwdSecret);


let i = 3;

while (i > 0) {

    let secretInput = parseInt(prompt("Introduce la contraseña. Tienes " + i + " intentos:"));

    if (secretInput == pwdSecret) {
        console.log("Enhorabuena has adivinado la contraseña");
        break;
    } else {
        console.log(secretInput + " no es igual a " + pwdSecret);
    }
    console.log(i);
    i--;
}