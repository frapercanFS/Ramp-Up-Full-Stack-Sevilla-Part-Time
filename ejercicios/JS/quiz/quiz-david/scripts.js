//plantilla preguntas para el quiz

const plantillaPreguntas = [
  {
      pregunta: "¿De qué color era el caballo blanco de Santiago?",
      respuesta: [
          "Blanco",
          "Negro",
          "Marrón",
          "Santiago no tenía caballo"
      ],
      solucion: "Blanco"
  },
  {
      pregunta: "¿Quien engaño a Roger Rabbit?",
      respuesta: [
          "Jessica Rabbit",
          "Maroon",
          "Dumbo",
          "Las comadrejas"
      ],
      solucion: "Maroon"

  },
  {
      pregunta: "¿Porque el cielo es gris?",
      respuesta: [
          "Por la dispersar luz con longitud de onda corta en la atmosfera",
          "No lo sé",
          "Es así cuando los Dioses están contento y rojo cuando se enfadan",
          "Reflexion de la luz del sol con los oceanos"
      ],
      solucion: "Por la dispersar luz con longitud de onda corta en la atmosfera"


  },
  {
      pregunta: "Si vamos en una carrera y adelantamos al segundo¿En qué puesto vamos?",
      respuesta: [
          "Segundo",
          "Primero",
          "Seríamos campeones de la carrera",
          "Faltan datos para poder averiguarlo, pero aproximadamente es el log2"
      ],
      solucion: "Segundo"

  },
  {
      pregunta: "Quien tiene el record del mundo en velocidad?",
      respuesta: [
          "Usain Bolt",
          "Sonic",
          "Speddy González",
          "Flash"
      ],
      solucion: "Usain Bolt"

  }  //Añadir en ésta línea más plantillas preguntas-respuesta-soluciones.
]

class GeneradorQuiz {
  constructor(pregunta, respuesta, solucion) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.solucion = solucion;
  }
}


let editorPreguntas = [];

for (let unaPregunta of plantillaPreguntas) {
  editorPreguntas.push(
    new GeneradorQuiz(unaPregunta.pregunta, unaPregunta.respuesta, unaPregunta.solucion)
  );
}

//console.log(editorPreguntas)

function tarjetasHTML(unaPregunta) {
  let newHTML = "";

  newHTML += imprimePregunta(unaPregunta);
  newHTML += imprimeTodasLasRespuestas(unaPregunta);
  newHTML += imprimeBotonSubmit();
  document.getElementById("quiz-game").innerHTML = newHTML;
  //  document.getElementById("quiz-game").innerHTML = htmlNuevo;
  return newHTML;
}

function imprimePregunta(plantillaPreguntas) {
  return "<p>".concat(plantillaPreguntas.pregunta, "</p>");
}
console.log(unaPregunta.pregunta)

/*


function imprimeTodasLasRespuestas(plantillaPreguntas) {
  let composicion = [];
  for (let opciones of plantillaPreguntas.respuesta) {
    composicion.push(imprimeUnaRespuesta(opciones));
  }
  return composicion.toString().replace(/,/g, " ");
}

function imprimeTitulo(plantillaPreguntas) {
  return "<p>".concat(plantillaPreguntas.pregunta, "</p>");
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

function comprobar(plantillaPreguntas) {
  console.log(document.getElementById(plantillaPreguntas.solucion).checked);
  if (document.getElementById(plantillaPreguntas.solucion).checked) {
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

document.getElementById("quiz-game").innerHTML = htmlNuevo;

document
  .querySelector('form[id="quiz-game"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();

let resultado =[];

for (let plantillaPreguntas of listaPreguntas) {
  for (let input of document.getElementsByName(
    plantillaPreguntas.respuesta[0].name
  )) {
    if (input.checked == true && input.value != plantillaPreguntas.solucion) {
      resultado.push("Respuesta incorrecta")
      for (let i=0;i<resultado.length)
    }
  }
}
*/
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
