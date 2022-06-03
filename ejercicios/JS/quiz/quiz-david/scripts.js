//plantilla preguntas para el quiz

const plantillaPreguntas = [
  {
      pregunta: "¿De qué color era el caballo blanco de Santiago?",
      respuesta: [
          { opcion: "Blanco" },
          { opcion: "Negro" },
          { opcion: "Marrón" },
          { opcion: "Santiago no tenía caballo" }
      ],
      solucion: "Blanco"
  },
  {
      pregunta: "¿Quien engaño a Roger Rabbit?",
      respuesta: [
          { opcion: "Jessica Rabbit" },
          { opcion: "Maroon" },
          { opcion: "Dumbo" },
          { opcion: "Las comadrejas" }
      ],
      solucion: "Maroon"

  },
  {
      pregunta: "¿Porque el cielo es gris?",
      respuesta: [
          { opcion: "Por la dispersar luz con longitud de onda corta en la atmosfera" },
          { opcion: "No lo sé" },
          { opcion: "Es así cuando los Dioses están contento y rojo cuando se enfadan" },
          { opcion: "Reflexion de la luz del sol con los oceanos" }
      ],
      solucion: "Por la dispersar luz con longitud de onda corta en la atmosfera"


  },
  {
      pregunta: "Si vamos en una carrera y adelantamos al segundo¿En qué puesto vamos?",
      respuesta: [
          { opcion: "Segundo" },
          { opcion: "Primero" },
          { opcion: "Seríamos campeones de la carrera" },
          { opcion: "Faltan datos para poder averiguarlo, pero aproximadamente es el log2" }
      ],
      solucion: "Segundo"

  },
  {
      pregunta: "Quien tiene el record del mundo en velocidad?",
      respuesta: [
          { opcion: "Usain Bolt" },
          { opcion: "Sonic" },
          { opcion: "Speddy González" },
          { opcion: "Flash" }
      ],
      solucion: "Usain Bolt"

  }  //Añadir en ésta línea más plantillas preguntas-respuesta-soluciones.
]

//const listaPreguntas nos un array cuyos valores son las preguntas del quiz.
const listaPreguntas = plantillaPreguntas.map(escribePregunta => escribePregunta.pregunta); {
  listaPreguntas.toString().replace(/,/g, " ");
}

//const listaRespuestas nos un array cuyos valores son las respuestas del quiz.
const listaRespuestas = plantillaPreguntas.map(escribeRespuesta => escribeRespuesta.respuesta); {
}
//const listaSoluciones nos un array cuyos valores son las soluciones del quiz.
const listaSoluciones = plantillaPreguntas.map(escribeSolucion => escribeSolucion.solucion); {
}
function enlazarHTML (plantillaPreguntas) {
  let newHTML = "";

  newHTML += listaPreguntas(plantillaPreguntas);
  
}


/*Variables
import {const preguntas} from './funcionalidad.js';



//Funciones
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

let resultado =[];

for (let pregunta of listaPreguntas) {
  for (let input of document.getElementsByName(
    pregunta.respuestas[0].name
  )) {
    if (input.checked == true && input.value != pregunta.solucion) {
      resultado.push(Respuesta incorrecta)
      for (let i=0;i<resultado.length)
    }
  }
}

    /*
   True si todas están bien, Si alguna erronea False
    let resultado = true;
    for (let pregunta of listaPreguntas) {
      for (let input of document.getElementsByName(
        pregunta.respuestas[0].name
      )) {
        if (input.checked == true && input.value != pregunta.solucion) {
          resultado = false;
          for (let i=0;i<resultado.length)
        }
      }
    }
    alert(resultado);
  });*/
