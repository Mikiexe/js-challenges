let diaUser = prompt("Introduce el dia de la semana: ").toLowerCase();

switch (diaUser) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
        console.log("Es dia laboral");
        break;
    case "viernes":
        console.log("No es dia laboral.");
        break;
    case "sabado":
    case "domingo":
}

