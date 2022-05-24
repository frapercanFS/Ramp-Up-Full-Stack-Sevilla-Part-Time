window.onload = aplicarFunciones;

function aplicarFunciones() {
  denegarElementosOnClick();
  cambiarImagenOnClick();
  cambiarEstiloParrafosOnClick();
  cambiarEstiloArticleSectionOnClick();
  cambiarImagenOnMouseOver();
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
  e.target.src = "/ejercicios/JS/varita-magica/enunciado/assets/magic-4.gif";
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
  console.log(imagenAnterior);

  e.target.src = imagenAnterior;
}
