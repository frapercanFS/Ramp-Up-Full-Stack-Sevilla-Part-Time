/*Aquí puedes incluir más preguntas. utiliza la siguiente plantilla y rellena los campos vacíos y añadelo al final del código
 en el lugar que indica el comentario.
   , 
  {
    pregunta: "",
    respuesta: [
    "",
    "",
    "",
    ""
    ],
    solucion: ""
  }
  */

//const { getElementById } = require("domutils");

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

//posiblesOpciones es un array de respuestas con los valores de las opciones
const preguntas = plantillaPreguntas.map(titulo => titulo.pregunta);
const posiblesOpciones = plantillaPreguntas.map(posibilidades => posibilidades.respuesta);
const soluciones = plantillaPreguntas.map(respuesta => respuesta.solucion);

 function crearTarjetas(){
    for(tarjeta of preguntas){
 
        document.getElementById("quiz-game").innerHTML = tarjeta.pregunta


    }
}
crearTarjetas() 
/* 
       let opciones = tarjeta.respuesta
       let respuesta = tarjeta.soluciones
       let tarjeta = '<input type="radio" name="fav_language" value="'+respuesta'+">"'+titulo
     <label for="html">HTML</label><br>"
        //const opciones = document.createElement("input")
        let opciones = document.getElementById("quiz-game")

        opciones.setAttribute('value', tarjeta.solucion);
        opciones.innerHTML = ;
        const respuesta = document.createElement("label")
        respuesta.setAttribute('name', tarjeta.solucion);
        titulo.textContent = tarjeta.pregunta 

    }

    const quizz = document.getElementById('quiz-game');
    quizz.appendChild(titulo);
}
 */

// Create element
const el = document.createElement('button');

//  Set ID attribute on element
el.setAttribute('type', 'submit');

//  Add text content to element
el.textContent = 'Comprobar';

//  Or set the innerHTML of the element
// el.innerHTML = `<span>Hello world</span>`;

//  add element to DOM
const caja = document.getElementById('quiz-game');
caja.appendChild(el); 