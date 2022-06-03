window.onload = aplicarFunciones;

const colors = [
  "03045e",
  "023e8a",
  "0077b6",
  "0096c7",
  "00b4d8",
  "48cae4",
  "90e0ef",
  "ade8f4",
  "caf0f8",
];
const gifs = [
  "/ejercicios/JS/varita-magica/enunciado/assets/magic-1.gif",
  "/ejercicios/JS/varita-magica/enunciado/assets/magic-2.gif",
  "/ejercicios/JS/varita-magica/enunciado/assets/magic-3.gif",
  "/ejercicios/JS/varita-magica/enunciado/assets/magic-4.gif",
];

const getRandom = (array) => {
  let indiceAleatorio = Math.floor(Math.random() * array.length);

  return array[indiceAleatorio];
};


function aplicarFunciones() {
  denegarElementosOnClick();
  cambiarImagenOnClick();
  cambiarEstiloParrafosOnClick();
  cambiarEstiloArticleSectionOnClick();
  cambiarImagenOnMouseOver();
  cambiarBackgroundColorOnClick();
}

function denegarElementosOnClick() {
  todosLosElementos = document.getElementsByTagName("a");

  for (let elemento of todosLosElementos) {
    elemento.addEventListener("click", evitarComportamiento);
  }
}
function evitarComportamiento(e) {
  e.preventDefault();
}

function cambiarImagenOnClick() {
  imagenes = document.getElementsByTagName("img");
  for (let imagen of imagenes) {
    imagen.addEventListener("click", cambiarImagen);
  }
}

function cambiarImagen(e) {
  
  e.target.src = getRandom(gifs)

}

function cambiarEstiloParrafosOnClick() {
  parrafos = document.getElementsByTagName("p");
  for (let parrafo of parrafos) {
    parrafo.addEventListener("click", cambiarEstiloParrafo);
  }
}

function cambiarEstiloParrafo(e) {
  e.target.style.backgroundColor = "green";
  e.target.style.color = "blue";
}

function cambiarEstiloArticleSectionOnClick() {
  articulos = document.getElementsByTagName("article");
  secciones = document.getElementsByTagName("section");
  for (let articulo of articulos) {
    articulo.addEventListener("click", cambiarEstiloArticuloSeccion);
  }
  for (let seccion of secciones) {
    seccion.addEventListener("click", cambiarEstiloArticuloSeccion);
  }
}

function cambiarEstiloArticuloSeccion(e) {
  e.target.style.backgroundColor = "red";
}

function cambiarImagenOnMouseOver() {
  imagenes = document.getElementsByTagName("img");
  for (let imagen of imagenes) {
    imagen.addEventListener("mouseover", cambiarImagenPorGif);
  }
}

//https://brefere.com/fbapps/bcom.nsf/cvbdate/D514491209EE5C848725801A0074AE6E?opendocument

function cambiarImagenPorGif(e) {
  let imagenAnterior = e.target.src;

  e.target.src =
    "/ejercicios/JS/varita-magica/enunciado/assets/abracadabra.gif";

  e.target.addEventListener("mouseout", (e) => {
    cambiarGifPorImagen(e, imagenAnterior);
  });
}

function cambiarGifPorImagen(e, imagenAnterior) {
  e.target.src = imagenAnterior;
}


function cambiarBackgroundColorOnClick() {
  let body = document.querySelector("body");
  body.addEventListener("click", cambiarBackgroundColorAleatorio);
}

function cambiarBackgroundColorAleatorio(e) {
  console.log("#" + getRandom(colors));
  console.log(getRandom(colors));

  e.target.style.backgroundColor = "#" + getRandom(colors);


  e.target.src = imagenAnterior;

}
