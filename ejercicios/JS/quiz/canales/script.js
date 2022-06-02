import Trivial from "./trivial.js";
import Pregunta from "./pregunta.js";
import { preguntas } from "./preguntas.js";
import {comprobarSolucion} from "./comprobarSolucion.js"
import {escogerPreguntasAleatorias} from "./escogerPreguntasAleatorias.js"

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

listaPreguntas = escogerPreguntasAleatorias(listaPreguntas,2)

let trivial = new Trivial(listaPreguntas);

document.getElementById("dinamico").innerHTML = trivial.imprimePreguntas();

// Asignamos la validación para cuando presionemos el boton submit
document
  .querySelector('form[id="dinamico"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();
    comprobarSolucion(document.innerHTML,trivial)
    location.reload(); 
  });
