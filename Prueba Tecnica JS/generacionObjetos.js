let usuario = {
    username: "",
    mail: "",
    password: "",
    id: ""
}


let usuarioName = prompt("Establece un nombre de usuario: ");
let correo = prompt("Escribe tu correo electrónico: ");
let pswd = prompt("Establece una contraseña: ");

let arrayUsuarios = [];
arrayUsuarios.push(usuarioName);



for (i = 0; i < arrayUsuarios.length; i++) {

    let newId = Math.floor(Math.random() * 100);
    usuario.id = newId;
    console.log(usuario.id);
}

usuario.username = usuarioName;
usuario.mail = correo;
usuario.password = pswd;

console.log(usuario);
console.log(arrayUsuarios);