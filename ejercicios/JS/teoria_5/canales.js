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

function mostrarUsuarioGit(usuario) {
  fetch(`https://api.github.com/users/${usuario}`)
    .then((response) => response.json())
    .then((json) => crearUsuarioHTML(json))
    .catch((error) => alert(error));
}

function crearUsuarioHTML(json) {
  let nombre = json.name;
  let numRepos = json.public_repos;
  let avatar = json.avatar_url;

  nombreHTML = document.createElement("p");
  nombreHTML.innerHTML = nombre;
  document.getElementById("nombreUsuario").appendChild(nombreHTML);

  numReposHTML = document.createElement("p");
  numReposHTML.innerHTML = numRepos;
  document.getElementById("numeroRepos").appendChild(numReposHTML);

  avatarHTML = document.createElement("img");
  avatarHTML.src = avatar;
  document.getElementById("avatar").appendChild(avatarHTML);
}

let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    // todas las respuestas son resueltas satisfactoriamente
    return responses;
  })
  // mapea el array de resultados dentro de un array de response.json() para leer sus contenidos
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // todas las respuestas JSON son analizadas: "users" es el array de ellas
  .then((users) => users.forEach((user) => console.log(user.name)));
