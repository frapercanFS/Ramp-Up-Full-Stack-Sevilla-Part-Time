var botonSumit = document.getElementById("submit")
botonSumit.addEventListener("click", guardarDatos)
const datos = ""

function guardarDatos(e) {
    e.preventDefault();
    var inputFname = document.getElementById("fname");
    var inputEmail = document.getElementById("email");
    var inputMensaje = document.getElementById("mensaje");
    var inputImagen = document.getElementById("imagen");

    var user = {
        nombre: inputFname.value,
        email: inputEmail.value,
        mensaje: inputMensaje.value,
        imagen: inputImagen.value
    }

    localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
    var datosFormulario = localStorage.getItem("usuarios");

    console.log(user)




    // console.log(datosFormulario)
    console.log("resultadoamostrar", localStorage);
    mostrarDatos()
}

function borrarDatos() {
    localStorage.clear()
    mostrarDatos()
}

function mostrarDatos() {
    let newHTML = "";
    for (indiceUsuario of Object.keys(localStorage)) {

        let usuario = JSON.parse(localStorage.getItem(indiceUsuario))

        newHTML += '<span id="indice">' + indiceUsuario + '</span>'
        newHTML += '<span id="usuario">' + usuario.nombre + '</span>'
        newHTML += '<span id="email">' + usuario.email + '</span>'
        newHTML += '<span id="mensaje">' + usuario.mensaje + '</span>'
        newHTML += '<span id="url">' + usuario.url + '</span>'

        newHTML += '<button onclick=borrarSeleccion(' + indiceUsuario + ')>Eliminar</button><br>'

        console.log("datos", usuario.nombre)
        console.log("email", usuario.email)
        console.log("mensaje", usuario.mensaje)
        console.log("url", usuario.url)


        console.log("indice", indiceUsuario)
    }

    document.getElementById("mostrarResultado").innerHTML = newHTML
}

function borrarSeleccion(indiceUsuario) {
    localStorage.removeItem(indiceUsuario);
    mostrarDatos()
}