var botonSumit = document.getElementById("submit")
botonSumit.addEventListener("click", guardarDatos)

function guardarDatos(e) {
    e.preventDefault();

    var inputFname = document.getElementById("fname");
    var inputEmail = document.getElementById("email");
    var inputMensaje = document.getElementById("mensaje");
    var inputImagen = document.getElementById("imagen");

    var user = {
        nombre: inputFname.value,
        mensaje: inputMensaje.value,
        imagen: inputImagen.value,
        email: inputEmail.value
    };

    localStorage.setItem(localStorage.length, JSON.stringify(user));
    console.log(localStorage);
}

function sacarDatos() {
    var usuariosList = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosList);
}

function limpiar() {
    localStorage.clear();
    console.log(localStorage);
}


var div = document.createElement("div");
div.id = "div";

function crearUsuario(clave) {
    const p = document.createElement("p");
    p.innerText = localStorage.getItem(clave);
    document.getElementById("lista").appendChild(p);
}

function mostrarTexto() {
    let html = "";
    for (i = 1; i < localStorage.length; i++) {
        let user = JSON.parse(localStorage.getItem(i))
        html += "<p>" + JSON.parse(localStorage.getItem(i)).nombre +
            JSON.parse(localStorage.getItem(i)).email +
            JSON.parse(localStorage.getItem(i)).mensaje +
            JSON.parse(localStorage.getItem(i)).imagen +
            "<button id='botonBorrar' onclick=''>" + "Borrar" + "</button>" + "</p>";
        console.log(html);
    }
    document.getElementById("mostrarUsers").innerHTML = html;
}