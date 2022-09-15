let nota = parseInt(prompt("Que nota has sacado?"));

console.log(nota);



if (nota <= 4) {
    console.log("Esa nota es insuficiente");

}
else if (nota <=6 && nota >= 5) {
    console.log("Esa nota es suficiente");

}
else if (nota <=8 && nota >= 7
         ) {
    console.log("Esa nota es notable");

}
else if (nota <=10 && nota >= 9) {
    console.log("Esa nota es excelente");

}
else {
    alert("No tienes notas?")
}


// switch (nota) {

//     case nota <= 4:
//         console.log("Esa nota es insuficiente");
//         break;

//     case 5 <= nota <= 6:
//         console.log("Esa nota es suficiente");
//         break;

//     case 7 <= nota <= 8:
//         console.log("Esa nota es notable");
//         break;

//     case 9 <= nota <= 10:
//         console.log("Esa nota es excelente");
//         break;
// };