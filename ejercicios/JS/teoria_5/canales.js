function listarPerros() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => crearListaPerrosHTML(Object.keys(json["message"])))
    .catch((error) => alert(error));
}

function fotoRandomPerro() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => crearImagenPerroHTML(json))
    .catch((error) => alert(error));
}

function crearListaPerrosHTML(listaPerros) {
  for (let raza of listaPerros) {
    let elemento = document.createElement("li");
    elemento.innerHTML = raza;
    document.getElementById("razas").appendChild(elemento);
  }
}

function crearImagenPerroHTML(json) {
  let imagenUrl = json["message"];

  document.getElementById(
    "imagenRandomPerro"
  ).innerHTML = `<img src="${imagenUrl}" alt="">`;
}

function mostrarFotosRazaEspecifica() {
  let razaEscogida = document.getElementById("raza").value;
  console.log(razaEscogida);
  fetch(`https://dog.ceo/api/breed/${razaEscogida}/images`)
    .then((response) => response.json())
    .then((json) => crearListaPerrosImagenesHTML(json["message"]))
    .catch((error) => alert(error));
}

function crearListaPerrosImagenesHTML(urls) {
  console.log(urls);
  for (let url of urls) {
    let elemento = document.createElement("img");
    elemento.src = url;
    elemento.height = 100;
    elemento.width = 100;
    document.getElementById("imagenesPerrosRaza").appendChild(elemento);
  }
}

function listarPerrosParaOpciones() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => crearOpcionesRazasHTML(Object.keys(json["message"])))
    .catch((error) => alert(error));
}

function crearOpcionesRazasHTML(listaPerros) {
  console.log(listaPerros);
  for (let raza of listaPerros) {
    let elemento = document.createElement("option");
    elemento.innerHTML = raza;
    document.getElementById("listaRazas").appendChild(elemento);
  }
}
