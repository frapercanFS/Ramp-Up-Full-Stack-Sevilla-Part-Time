
const preguntas = [{
    pregunta: "En el mundo de Mazmorras y Dragones ¿Quién es Elminster?",
    opciones: ["Un Bardo", "Un Mercader", "Un Mago", "Un Marinero"],
    respuesta: "Un Mago"
},
 /*{
    pregunta: "¿Quién de estos personajes no es un Hobitt?",
    opciones: ["Frodo", "Sam", "Golum", "Bardo"],
    respuesta: "Bardo"
},
{
    pregunta: "¿Cual es el nombre de la ciudad bajo la montaña del Hobbit?",
    opciones: ["Minas tirith", "Erebor", "Rivendell", "Abismo de Helm"],
    respuesta: "Erebor"
} */]
class Pregunta {
    constructor(pregunta, opciones, respuesta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    comprobarOpcion(eleccion) {
        return eleccion === this.respuesta
    }
}

let listaPreguntas = [];
for (let pregunta of preguntas) {
    listaPreguntas.push(new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));

}

let htmlNuevo = "";
for (let pregunta of listaPreguntas) {
    htmlNuevo += imprimePregunta(pregunta);
} 
function imprimePregunta(pregunta) {
    let newHTML = "";

    newHTML += imprimeTitulo(pregunta);
     newHTML += imprimeTodasLasRespuestas(pregunta); 

    return newHTML;
}

function imprimeTitulo(pregunta) {
    let tituloPregunta = pregunta.pregunta;
    document.getElementById("pregunta").innerText = tituloPregunta;

}
console.log(preguntas)
 function imprimeTodasLasRespuestas(pregunta) {

    for (let i = 0; i < pregunta.opciones.length; i++) {
        const opcion = document.createElement("button");
        opcion.innerText = pregunta.opciones[i];
        opcion.className = 'button';
        document.getElementById("opciones").appendChild(opcion);
        opcion.addEventListener("click", opcionSeleccionada)

    }
    function opcionSeleccionada(e) {
        let opcionElegida = e.target.innerText;
        let score = 0;
        if (pregunta.comprobarOpcion(opcionElegida)) {
            e.target.style.backgroundColor = "green";
            score++
        }
        else {
            e.target.style.backgroundColor = "red";
        }
  SiguientePregunta()
    }
}
      
function SiguientePregunta() {
/*     const sigueinteBoton = document.createElement("button");
    sigueinteBoton.innerText = "Siguiente Pregunta";
    sigueinteBoton.className = 'button';
    document.getElementById("siguiente-pregunta").appendChild(sigueinteBoton);
    sigueinteBoton.addEventListener("click", reemplazarPreguntas); */
document.getElementById("siguiente-pregunta").style.display = "block";

}

function reemplazarPreguntas() {
console.log("siguiente")
}
 