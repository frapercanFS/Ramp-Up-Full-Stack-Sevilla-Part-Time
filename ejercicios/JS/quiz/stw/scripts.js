const preguntas = [{
    titulo: "¿A quién ha doblado más veces Constantino Romero?",
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        },
    ],
    solucion: "clint-eastwood"
}, {
    titulo: "¿Qué famosa frase dijo doblando a Darth Vader?",
    respuestas: [
        {
            label: "Yo soy tu padre",
            id: "tu-padre",
            name: "frase",
            value: "tu-padre",
        },
        {
            label: "Demasiado lento, vaquero",
            id: "vaquero",
            name: "frase",
            value: "vaquero",
        },
        {
            label: "En ocasiones, veo muertos",
            id: "veo-muertos",
            name: "frase",
            value: "veo-muertos",
        },
        {
            label: "Hasta la vista, baby",
            id: "baby",
            name: "frase",
            value: "baby",
        },
        {
            label: "Me importa un bledo",
            id: "bledo",
            name: "frase",
            value: "bledo",
        },
    ],
    solucion: "tu-padre"
}, {
    titulo: "¿Dónde nació Constantino Romero?",
    respuestas: [
        {
            label: "Alcala de Henares",
            id: "alcala-henares",
            name: "lugar",
            value: "alcala-henares",
        },
        {
            label: "Albacete",
            id: "albacete",
            name: "lugar",
            value: "albacete",
        },
        {
            label: "Madrid",
            id: "madrid",
            name: "lugar",
            value: "madrid",
        },
        {
            label: "Sevilla",
            id: "sevilla",
            name: "lugar",
            value: "sevilla",
        },
        {
            label: "Valencia",
            id: "valencia",
            name: "lugar",
            value: "valencia",
        },
    ],
    solucion: "alcala-henares"
}]

class Pregunta {
    constructor(titulo, respuestas, solucion) {
        this.titulo = titulo;
        this.respuestas = respuestas;
        this.solucion = solucion;
    }
}

function imprimePregunta(pregunta) {
    let newHTML = "";

    newHTML += imprimeTitulo(pregunta);
    newHTML += imprimeTodasLasRespuestas(pregunta);

    return newHTML;
}

function imprimeTitulo(pregunta) {
    return "<p>".concat(pregunta.titulo, "</p>");
}


function imprimeTodasLasRespuestas(pregunta) {
    let composicion = []
    for (let respuesta of pregunta.respuestas) {
        composicion.push(imprimeUnaRespuesta(respuesta))
    }
    return composicion.toString().replace(/,/g, " ")
}

function imprimeUnaRespuesta(respuesta) {

    let newHTML = "";

    newHTML += imprimeLabel(respuesta);
    newHTML += imprimeInput(respuesta);

    return newHTML;

}

function imprimeLabel(respuesta) {
    return '<label for="'.concat(
        respuesta.id,
        '">',
        respuesta.label,
        '</label>'
    );
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
    return '<button type="submit">Submit</button>'
}

nuevoFormulario = "";
for (pregunta of preguntas) {
    nuevoFormulario += imprimePregunta(pregunta);
}
nuevoFormulario += imprimeBotonSubmit();
document.getElementById("contenedorPreguntas").innerHTML =
    nuevoFormulario;

/* let soluciones = [];
for (pregunta of preguntas) {
    for (respuesta of pregunta.respuestas) {
        let respuestaSeleccionada = "";
        for (let input of document.getElementsByName(respuesta)) {
            if (input.checked == true) {
                respuestaSeleccionada = input.value;
            }
        }
        if (respuestaSeleccionada == respuesta[value]) {
            console.log(respuesta[value]);
            alert("Correcta");
        } else {
            alert("Incorrecta");
        }
    }
}; */

document
    .querySelector('form[id="contenedorPreguntas"]')
    .addEventListener("submit", (event) => {
        event.preventDefault();

        let soluciones = [];

        for (pregunta of preguntas) {
            for (respuesta of pregunta.respuestas) {
                let respuestaSeleccionada = "";
                for (let input of document.getElementsByName(respuesta)) {
                    if (input.checked == true) {
                        respuestaSeleccionada = input.value;
                        console.log("respuestaSeleccionada");
                    }
                }
                if (respuestaSeleccionada == respuesta.value) {
                    console.log(respuesta.value);
                    alert("Correcta");
                } else {
                    alert("Incorrecta");
                }
            }
        };
    });