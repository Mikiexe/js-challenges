let numeroUsuario = parseInt(prompt("Introduce un número para descubrir si es primo: "));

console.log(numeroUsuario);


const calcPrimo = (numeroMax) => {

    let numeroInicial = 0;

    while (numeroInicial < numeroMax) {
        console.log("numeroInicial");
        for (let i = 2; i <= numeroInicial; i++) {

            if (numeroInicial % i == 0) {
                return console.log("no primo");
            } else {
                return console.log("primo" + numeroInicial);
            };
        };

        numeroUsuario++;
    };
};

let numeroInicial = 0;

while (numeroInicial < numeroUsuario) {
    console.log(numeroInicial);

    numeroUsuario++;
}
