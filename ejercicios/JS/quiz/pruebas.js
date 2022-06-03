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
},
{
    pregunta: "¿Cuanto se Tardo en escribir el libro El Señor de los Anillos?",
    opciones: ["13 Meses", "5 Meses", "6 Años", "12 Años"],
    respuesta: "12 Años"
},
{
    pregunta: "¿Cuantos Magos Hay en el Mundo del Señor de los Anillos?",
    opciones: ["2 Magos", "3 Magos", "5 Magos", "Muchos Magos"],
    respuesta: "5 Magos"
}]
const preguntasStarWars = [{
    pregunta: "¿Qué perdió Luke Skywalker en su pelea con Darth Vader?",
    opciones: ["Su mano izquierda", "Su pie izquierdo", "Su mano derecha", "Su pierna izquierda"],
    respuesta: "Su mano derecha"
},
{
    pregunta: "¿Dónde comenzaron las Guerras Clon?",
    opciones: ["Tatooine", "Geonosis", "Naboo", "coruscant"],
    respuesta: "Geonosis"
},
{
    pregunta: "¿Cómo se llama el Lord Sith que sostiene un  sable de doble hoja?",
    opciones: ["Darth Vader", "Darth Mutilar", "Darth Maul", "Darth Garth"],
    respuesta: "Darth Maul"
},
{
    pregunta: "¿Cuáles son las criaturas que viven en Endor que ayudaron a los rebeldes a derrotar a la segunda Estrella de la Muerte?",
    opciones: ["Ewoks", "Wookies", "Jawas", "Zillo"],
    respuesta: "Ewoks"
},
{
    pregunta: "¿Qué apodo llama Han Solo a Luke Skywalker que lo vuelve loco?",
    opciones: ["Buckaroo", "Niño", "Skydancer", "Lukie"],
    respuesta: "Niño"
}]


let indicePregunta = 0;
let score = 0;
let preguntasErroneas = [];
comenzarTrivial();

function comenzarTrivial() {
    const comenzar = document.createElement("button");
    const starTema = document.createElement("button");
    const anilloTema = document.createElement("button");
    comenzar.innerText = "Empezar";
    comenzar.className = 'button';
    comenzar.setAttribute('id', 'empezar');
    document.getElementById("comenzar-trivial").appendChild(comenzar);
    comenzar.addEventListener("click", elegirTema)
    function elegirTema(e) {
        esconderElemento(["empezar"]);
        starTema.innerText = "StarWars";
        starTema.className = 'button';
        starTema.setAttribute('id', 'star-tema');
        document.getElementById("elegir-tema").appendChild(starTema);
        starTema.addEventListener("click", trivialStarWars);
        anilloTema.innerText = "El Hobbit";
        anilloTema.className = 'button';
        anilloTema.setAttribute('id', 'anillo-tema');
        document.getElementById("elegir-tema").appendChild(anilloTema);
        anilloTema.addEventListener("click", trivialHobbit);

    }
    function trivialStarWars(e) {
        imprimirTrivial(preguntasStarWars, indicePregunta)
    }
    function trivialHobbit(e) {
        imprimirTrivial(preguntas, indicePregunta)
    }
}


function imprimirTrivial(preguntas, indice) {
    esconderElemento(["star-tema","anillo-tema","volver-jugar"])
    mostrarElemento(["contenedor-bar"])
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
    mostrarElemento(["siguiente-pregunta"]);
}

function reemplazarPreguntas() {
    indicePregunta++
    eliminarOpciones()
    actualizarProgress()
    if (indicePregunta == preguntas.length) {
        finDelJuego()
    }
    else {
        imprimirTituloTrivial(preguntas, indicePregunta)
        nuevasOpcionesTrivial(preguntas, indicePregunta)
    }
}
function actualizarProgress() {
    const progressBar = document.getElementById("progress-bar")
    const contenedorBar = document.getElementById("contenedor-bar")
    let progresoTrivial = (indicePregunta / preguntas.length) * 100;
    progressBar.style.width = `${progresoTrivial}%`;

}
function eliminarOpciones() {
    esconderElemento(["siguiente-pregunta"]);
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
    puntuacion.setAttribute("id", "puntuacion-final");
    puntuacion.innerHTML = "<span>Tu puntuacion ha sido de: </span>" + score + "/" + preguntas.length;
    document.getElementById("opciones").appendChild(puntuacion);
    preguntasEquivocadas()

}

function preguntasEquivocadas() {
    const preguntasEquivocadas = document.createElement("p")
    const volverJugar = document.createElement("button");
    document.getElementById("preguntas-erroneas").appendChild(preguntasEquivocadas);
    mostrarElemento(["preguntas-erroneas"]);
    if (typeof preguntasErroneas != "undefined" && preguntasErroneas != null && preguntasErroneas.length != null && preguntasErroneas.length > 0) {
        for (let i = 0; i < preguntasErroneas.length; i++) {

            preguntasEquivocadas.innerHTML = "<span><b>Te Has Equivocado en la Pregunta: </b>" + preguntasErroneas; + "</span>"
        }

    }
    else {
        preguntasEquivocadas.innerHTML = "<span id='puntuacion-perfecta'>Enhorabuena Has acertado todas las preguntas eres un Friki </span>"

    }
    volverJugar.innerText = "Volver a Jugar";
    volverJugar.className = 'button';
    volverJugar.setAttribute('id', 'volver-jugar');
    document.getElementById("volver-jugar").appendChild(volverJugar);
    mostrarElemento(["volver-jugar"]);
    volverJugar.addEventListener("click", volverAJugar);
    function volverAJugar(e) {
        indicePregunta = 0;
        score = 0;
        preguntasErroneas = [];
        actualizarProgress();
        esconderElemento(["puntuacion-final","preguntas-erroneas"])

        imprimirTrivial(preguntas, indicePregunta)

    }

}
function esconderElemento(id) {
    id.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
}
function mostrarElemento(id) {
    id.forEach(element => {
        document.getElementById(element).style.display = "block";
    });
}
/* function crearElemento(nombre,clase,id,texto) {
    const nombre = document.createElement(`${clase}`);
    nombre.innerText = `${texto}`;
    nombre.className = `${clase}`;
    comenzar.setAttribute('id', `${id}%`);
    document.getElementById(`${id}%`).appendChild(nombre);
}

class nuevoElemento {
    constructor(nombre,clase,id,texto) {
        this.nombre = nombre;
        this.clase = clase;
        this.id = id;
        this.texto = texto;
    }

    crearElemento(nombre,clase,id,texto) {
        const nombre = document.createElement(clase);
        nombre.innerText = texto;
        nombre.className = clase;
        comenzar.setAttribute('id', id);
        document.getElementById(id).appendChild(nombre);}
} */