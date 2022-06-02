const preguntas = [{
    pregunta: "En el mundo de Mazmorras y Dragones ¿Quién es Elminster?",
    opciones: ["Un Bardo", "Un Mercader", "Un Mago", "Un Marinero"],
    respuesta: "Un Mago"
},
{
    pregunta: "¿Quién de estos personajes no es un Hobitt?",
    opciones: ["Frodo", "Sam", "Golum", "Bardo"],
    respuesta: "Bardo"
},
{
    pregunta: "¿Cual es el nombre de la ciudad bajo la montaña del Hobbit?",
    opciones: ["Minas tirith", "Erebor", "Rivendell", "Abismo de Helm"],
    respuesta: "Erebor"
}]

let indicePregunta = 0;
let score = 0;
let preguntasErroneas = []

function imprimirTrivial(preguntas, indice) {
    imprimirTituloTrivial(preguntas, indice)
    imprimirOpcionesTrivial(preguntas, indice)

}

function imprimirTituloTrivial(preguntas, indice) {
    document.getElementById("pregunta").innerText = preguntas[indice].pregunta

}
function imprimirOpcionesTrivial(preguntas, indice) {

    for (let i = 0; i < preguntas[indice].opciones.length; i++) {
        const opcion = document.createElement("button");
        opcion.innerText = preguntas[indice].opciones[i];
        opcion.className = 'button';
        opcion.setAttribute('id', 'esconder');
        document.getElementById("opciones").appendChild(opcion);
        opcion.addEventListener("click", opcionSeleccionada)

    }

    function opcionSeleccionada(e) {
        let opcionElegida = e.target.innerText;
        if (opcionElegida == preguntas[indice].respuesta) {
            e.target.style.backgroundColor = "green";
            score++
        }
        else {
            e.target.style.backgroundColor = "red";
            preguntasErroneas.push(preguntas[indice].pregunta)
        }

        SiguientePregunta()


    }
}
function SiguientePregunta() {
    document.getElementById("siguiente-pregunta").addEventListener("click", reemplazarPreguntas);
    document.getElementById("siguiente-pregunta").style.display = "block";
}

function reemplazarPreguntas() {
    eliminarOpciones()
    indicePregunta++
    if (indicePregunta == preguntas.length) {
        finDelJuego()
    }
    else {
        imprimirTituloTrivial(preguntas, indicePregunta)
        nuevasOpcionesTrivial(preguntas, indicePregunta)
    }
}

function eliminarOpciones() {
    document.getElementById("siguiente-pregunta").style.display = "none";
    const opcionesAntiguas = document.getElementsByClassName('button');
    for (let i = 0; i < opcionesAntiguas.length; i++) {
        opcionesAntiguas[i].style.display = "none";
    }

}
function nuevasOpcionesTrivial(preguntas, indice) {
    const viejasOpciones = document.getElementsByClassName("button");
    for (let i = 0; i < viejasOpciones; i++) {
        viejasOpciones[i].parentNode.removeChild(opciones);
    }
    imprimirOpcionesTrivial(preguntas, indicePregunta)
}

function finDelJuego() {
    const tituloFinal = document.getElementById("pregunta")
    tituloFinal.innerText = "Fin del Juego"
    const puntuacion = document.createElement("p");
    puntuacion.setAttribute("id", "puntuacion-final")
    puntuacion.innerHTML = "<span>Tu puntuacion ha sido de: </span>" + score + "/" + preguntas.length;
    document.getElementById("opciones").appendChild(puntuacion);
    preguntasEquivocadas()
    /*     const preguntasEquivocadas= document.getElementById("preguntas-erroneas")
        preguntasEquivocadas.innerHTML = "<span>Te Has Equivocado en las preguntas: </span>" + preguntasErroneas */
}

function preguntasEquivocadas() {
    const preguntasEquivocadas = document.createElement("p")
    document.getElementById("preguntas-erroneas").appendChild(preguntasEquivocadas);
    if (typeof preguntasErroneas != "undefined" && preguntasErroneas != null && preguntasErroneas.length != null && preguntasErroneas.length > 0) {
        for (let i = 0; i < preguntasErroneas.length; i++) {

            preguntasEquivocadas.innerHTML = "<span><b>Te Has Equivocado en la Pregunta: </b>" + preguntasErroneas; + "</span>"
        }

    }
         else{
             preguntasEquivocadas.innerHTML = "<span id='puntuacion-perfecta'>Enhorabuena Has acertado todas las preguntas eres un Friki </span>"

        }  

}
imprimirTrivial(preguntas, indicePregunta)