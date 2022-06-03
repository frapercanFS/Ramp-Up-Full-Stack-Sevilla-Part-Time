import Trivial from "./clases/trivial.js";
import Pregunta from "./clases/pregunta.js";
import { preguntas } from "./preguntas.js";
import { comprobarSolucion } from "./funciones/comprobarSolucion.js";
import { escogerPreguntasAleatorias } from "./funciones/escogerPreguntasAleatorias.js";

import { numeroPreguntas } from "./parametros.js";

// Leemos el fichero de preguntas
let listaPreguntas = [];

for (let pregunta of preguntas) {
  listaPreguntas.push(
    new Pregunta(
      pregunta.titulo,
      pregunta.respuestas,
      pregunta.solucion,
      pregunta.name
    )
  );
}

listaPreguntas = escogerPreguntasAleatorias(listaPreguntas, numeroPreguntas);

let trivial = new Trivial(listaPreguntas);

document.getElementById("dinamico").innerHTML = trivial.imprimePreguntas();

// Asignamos la validación para cuando presionemos el boton submit
document
  .querySelector('form[id="dinamico"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();
    comprobarSolucion(document.innerHTML, trivial);
    location.reload();
  });
