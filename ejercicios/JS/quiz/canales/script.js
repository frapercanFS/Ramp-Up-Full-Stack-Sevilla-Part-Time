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
// listaPreguntas = escogerPreguntasAleatorias(listaPreguntas,2)

// Inicializamos el Trivial
let trivial = new Trivial(listaPreguntas);

// Mostramos el formulario por pantalla.
document.getElementById("dinamico").innerHTML = trivial.imprimePreguntas();

// Asignamos la validación para cuando presionemos el boton submit
document
  .querySelector('form[id="dinamico"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();
    comprobarSolucion(document.innerHTML,trivial)
    location.reload(); 

    // True si todas están bien, Si alguna erronea False
  });
