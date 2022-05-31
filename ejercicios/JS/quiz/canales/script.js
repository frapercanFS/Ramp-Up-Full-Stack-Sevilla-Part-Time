import respuestas from "./preguntas_trivial"

class Pregunta {
  constructor(titulo, respuestas, solucion) {
    this.titulo = titulo;
    this.respuestas = respuestas;
    this.solucion = solucion;
  }
}

let listaPreguntas = [];

for (let pregunta of preguntas) {
  listaPreguntas.push(
    new Pregunta(pregunta.titulo, pregunta.respuestas, pregunta.solucion)
  );
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);
  // newHTML += imprimeBotonSubmit();

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return "<p>".concat(pregunta.titulo, "</p>");
}

function imprimeTodasLasRespuestas(pregunta) {
  let composicion = [];
  for (let respuesta of pregunta.respuestas) {
    composicion.push(imprimeUnaRespuesta(respuesta));
  }
  return composicion.toString().replace(/,/g, " ");
}

function imprimeUnaRespuesta(respuesta) {
  let newHTML = "";

  newHTML += imprimeLabel(respuesta);
  newHTML += imprimeInput(respuesta);

  return newHTML;
}

function imprimeLabel(respuesta) {
  return '<label for="'.concat(respuesta.id, '">', respuesta.label, "</label>");
}

function imprimeInput(respuesta) {
  return '<input type="radio" id="'.concat(
    respuesta.id,
    '" name="',
    respuesta.name,
    '" value="',
    respuesta.value,
    '"> '
  );
}

function imprimeBotonSubmit() {
  return '<button type="submit">Comprobar</button> ';
}

function comprobar(pregunta) {
  console.log(document.getElementById(pregunta.solucion).checked);
  if (document.getElementById(pregunta.solucion).checked) {
    alert("Correcto");
  } else {
    alert("Incorrecto");
  }
}

htmlNuevo = "";
for (let pregunta of listaPreguntas) {
  htmlNuevo += imprimePregunta(pregunta);
}
htmlNuevo += imprimeBotonSubmit();

document.getElementById("dinamico").innerHTML = htmlNuevo;

document
  .querySelector('form[id="dinamico"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // True si todas están bien, Si alguna erronea False
    let resultado = true;
    for (let pregunta of listaPreguntas) {
      for (let input of document.getElementsByName(
        pregunta.respuestas[0].name
      )) {
        if (input.checked == true && input.value != pregunta.solucion) {
          resultado = false;
        }
      }
    }
    alert(resultado);
  });
