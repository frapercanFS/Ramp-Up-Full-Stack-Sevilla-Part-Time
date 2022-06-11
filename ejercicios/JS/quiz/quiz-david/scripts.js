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

console.log(editorPreguntas)


const tarjetaPregunta = editorPreguntas.map(fichas => fichas.pregunta);
const tarjetaRespuestas = editorPreguntas.map(fichas => fichas.respuesta);
const tarjetasolucion = editorPreguntas.map(fichas => fichas.solucion);


//document.getElementById("respuestaHTML").innerHTML = tarjetaRespuestas
console.log(3, tarjetaPregunta)
console.log("prueba", tarjetaPregunta[1])

let fichaHTML = [""];
function pasarHTML (){

  for(let pregunta of tarjetaPregunta)
  fichaHTML.push(tarjetaPregunta[0])

}console.log(fichaHTML)
