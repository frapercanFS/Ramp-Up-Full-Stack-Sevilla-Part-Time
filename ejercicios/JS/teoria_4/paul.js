/* const { json } = require("stream/consumers"); */

var botonSumit = document.getElementById("submit")
botonSumit.addEventListener("click", guardarDatos)


function guardarDatos(e) {
    e.preventDefault();
    var inputFname = document.getElementById("fname");
    var inputEmail = document.getElementById("email");
    var inputMensaje = document.getElementById("mensaje");
    var inputImagen = document.getElementById("imagen");


    let user = {
        nombre: inputFname.value,
        email: inputEmail.value,
        mensaje: inputMensaje.value,
        imagen: inputImagen.value
    }
    if (!localStorage.length) {
        localStorage.setItem("usuarios", JSON.stringify([]))
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuarios)
    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    datosFormulario = localStorage.getItem("usuarios");



    console.log(user)
    console.log(datosFormulario)

}
let botonClear = document.getElementById("boton-borrar")
botonClear.addEventListener("click", borrarDatosFormulario)

function borrarDatosFormulario() {

    console.log(JSON.parse(localStorage.getItem("usuarios")).length);
    for (let i = 0; i < JSON.parse(localStorage.getItem("usuarios")).length; i++) {
        console.log("Un usuario")
    }


}

