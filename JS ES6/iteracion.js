let numeroUsuario = parseInt(prompt("DAme un numero: "));


let numeroIni = 2;

while (numeroIni <= numeroUsuario) {
    // console.log(numeroIni);

    for (let i = 2; i <= numeroIni; i++) {

        if (numeroIni % i == 0) {
            //nada
            break;
        } else {
            console.log("primo ->" + numeroIni);
            break;
        };
    };
    numeroIni++;
};