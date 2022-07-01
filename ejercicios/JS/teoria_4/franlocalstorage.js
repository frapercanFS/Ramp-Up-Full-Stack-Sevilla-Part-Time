
function mostrarTexto() {
    let html = "";
    for (i = 1; i < localStorage.length; i++) {
        let user = JSON.parse(localStorage.getItem(i))
        html += "<p>" + JSON.parse(localStorage.getItem(i)).nombre + "   / "+
        JSON.parse(localStorage.getItem(i)).email + "   / "+
        JSON.parse(localStorage.getItem(i)).mensaje + "   / "+
        JSON.parse(localStorage.getItem(i)).imagen + "   / "+
       "<button id='botonBorrar' onclick='borrarItem(localStorage)'>" + "Borrar" + "</button>" + "</p>";
    console.log(html);
    }
    document.getElementById("mostrarUsers").innerHTML = html;


}


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
        email: inputEmail.value,
        mensaje: inputMensaje.value,
        imagen: inputImagen.value
    };

    localStorage.setItem(localStorage.length + 1, JSON.stringify(user));

    console.log(localStorage);

    mostrarTexto()
}




var botonBorrar = document.getElementById("borrarLocal")
botonBorrar.addEventListener("click", borrarDatos)

function borrarDatos() {
    localStorage.clear()
    console.log(localStorage);
}


  var botonBorrar2 = document.getElementById("botonBorrar")
botonBorrar.addEventListener("click", borrarItem)


 function borrarItem(localStorage) {
    localStorage.removeItem(localStorage.length)
    console.log(localStorage); 
} 
 

