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

 function crearPreguntas() {


  for (preguntas in editorPreguntas) {
    console.log(editorPreguntas[preguntas].respuesta)
    
    let escribePregunta = document.createElement("fieldset");
    escribePregunta.setAttribute("id", "quiz-pregunta")
    escribePregunta.innerHTML = editorPreguntas[preguntas].pregunta.toString().replace(/,/g, " ");

    const titulo = document.getElementById('quiz-game')
   
    //let nombre = editorPreguntas[preguntas].respuesta.toString().replace(/,/g, " ");
   // let tipo = "<input type='radio' name='"+nombre+"'>"
    let escribeOpciones = document.createElement("label");
    escribeOpciones.setAttribute("id", "opciones")
    
    escribeOpciones.textContent = editorPreguntas[preguntas].respuesta.toString().replace(/,/g, " ");
    
    const boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.textContent = 'Comprobar';
  
    const generadorTitulo = titulo.appendChild(escribePregunta)+titulo.appendChild(escribeOpciones)+titulo.appendChild(boton);

    
  }

}

 const opciones = document.getElementById('quiz-pregunta')
crearPreguntas() 
