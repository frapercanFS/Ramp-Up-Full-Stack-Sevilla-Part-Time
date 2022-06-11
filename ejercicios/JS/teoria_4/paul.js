var botonSumit = document.getElementById("submit")
botonSumit.addEventListener("click", guardarDatos)

function guardarDatos(e) {
    e.preventDefault();
    var inputFname = document.getElementById("fname");
    var inputEmail = document.getElementById("email");
    var inputMensaje = document.getElementById("mensaje");
    var inputImagen = document.getElementById("imagen");

    var user = { nombre: inputFname.value,
                 email: inputEmail.value,
                 mensaje: inputMensaje.value,
                 imagen: inputImagen.value }
    localStorage.setItem("usuarios", JSON.stringify(user));
   var datosFormulario = localStorage.getItem("usuarios");  

   console.log(user)
    console.log(datosFormulario)
}


