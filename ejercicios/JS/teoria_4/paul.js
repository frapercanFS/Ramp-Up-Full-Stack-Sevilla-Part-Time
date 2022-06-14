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
    usuarios.push(user)

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    datosFormulario = localStorage.getItem("usuarios");

    const usuariosRegistrados = document.createElement("ul");

    document.getElementById("usuarios-registrados").appendChild(usuariosRegistrados);

    usuariosRegistrados.innerHTML = `<li id="usuario-registrado"><b>Nombre:</b>${user.nombre}   <b>Email:</b>${user.email}<li>`



    console.log(user)
    console.log(datosFormulario)

}
let botonClear = document.getElementById("boton-borrar")
botonClear.addEventListener("click", borrarDatosFormulario)

function borrarDatosFormulario() {
    let listadoDeUsuarios = JSON.parse(localStorage.getItem("usuarios"))
    for (let i = 0; i < JSON.parse(localStorage.getItem("usuarios")).length; i++) {
        const botonesParaBorrar = document.createElement("div");


        botonesParaBorrar.innerHTML = `<button id="botones-borrado" onclick="eliminarUsuario(${i})" class="button">
                                       ${listadoDeUsuarios[i].nombre}</button>`;
        document.getElementById("opciones-borrado").appendChild(botonesParaBorrar);

    }
    console.log(JSON.parse(localStorage.getItem("usuarios")))
}
function eliminarUsuario(i) {
    let listadoDeUsuarios = JSON.parse(localStorage.getItem("usuarios"))
    let listadoDeUsuariosBorrados = listadoDeUsuarios.splice(i, 1);
    localStorage.setItem("usuarios", JSON.stringify(listadoDeUsuarios));
    console.log(listadoDeUsuariosBorrados[0].nombre)
    const usuariosBorrados = document.createElement("ul");


    usuariosBorrados.innerHTML = `<li id="usuario-eliminado">
    <b>Nombre:</b>${listadoDeUsuariosBorrados[0].nombre} 
      <b>Email:</b>${listadoDeUsuariosBorrados[0].email}<li>`
    document.getElementById("usuarios-eliminados").appendChild(usuariosBorrados);

    var antiguosBotones = document.querySelectorAll("#botones-borrado")
    for(let i=0; i<antiguosBotones.length;i++){
        antiguosBotones[i].style.display = "none";
    }
    borrarDatosFormulario();
}

localStorage.clear()

