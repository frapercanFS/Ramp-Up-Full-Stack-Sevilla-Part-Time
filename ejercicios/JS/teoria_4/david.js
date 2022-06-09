/*
1. Formulario de contacto - Local Storage
Crear un formulario de contacto con los siguientes campos:
Nombre
Email
Mensaje
URL imagen
Guardar en Local Storage los datos de contacto enviados de cada usuario
Mostrar los datos de los contactos guardados en el DOM
Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
*/

document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault();
    guardarFormulario();
})
    

//document.getElementById("storage_ejemplo").addEventListener("click", guardarFormulario);



function guardarFormulario() {

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;
let url = document.getElementById("url").value;

localStorage.setItem("Nombre", nombre);
localStorage.setItem("email", email);
localStorage.setItem("mensaje", mensaje);
localStorage.setItem("url", url);

/* Opcion paul hay que pulir
var user = {
    [nombre: nombre.value],
    [email: email.value],
    [mensaje: mensaje.value],
    [url: url.value]
}

localStorage.setItem("usuario",JSON.stringify(user));
var user = JSON.parse(localStorage.getItem("usuario"));
console.log(user)
console.log(usuario)
*/
console.log(localStorage)
}
//Leer todo lo que hay en local Storage
