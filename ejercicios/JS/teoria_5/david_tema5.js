
function listarPerros() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => crearListaPerrosHTML(Object.keys(json['message'])));
}

function crearListaPerrosHTML(listarPerros){
  for(let raza of listarPerros) {
    let elemento = document.createElement("li")
    elemento.innerHTML = raza
    document.getElementById("razas").appendChild(elemento)
  }
}

function fotoRandomPerro() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => crearListaPerrosHTML(Object.keys(json)));
}

function crearImagenPerro(json){

  let imagenURL = json['message'];


}

mostrarFotoRazaEspecifica(){
let razaEscoogida = document.getElementById("razaEscogida")

}
function mostrarFotoRazaEspecifica() {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => response.json())
    .then((json) => crearListaPerrosHTML(Object.keys(json['message'])));
}
