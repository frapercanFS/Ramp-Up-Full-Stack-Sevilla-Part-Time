import const plantillaPreguntas}







/*export const preguntas = [{
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
  titulo: "Titulo",
  respuestas: [
    {
      label: "label1",
      id: "id1",
      name: "pregunta2",
      value: "value1",
    },
    {
      label: "label2",
      id: "id2",
      name: "pregunta2",
      value: "value2",
    },
    {
      label: "label3",
      id: "id3",
      name: "pregunta2",
      value: "value3",
    },
    {
      label: "label4",
      id: "id4",
      name: "pregunta2",
      value: "value4",
    },
    {
      label: "label5",
      id: "id5",
      name: "pregunta2",
      value: "value5",
    },
  ],
  solucion: "value5"
}];

class Preguntas {
  constructor(titulo, respuestas, solucion) {
    this.titulo = titulo;
    this.respuestas = respuestas;
    this.solucion = solucion;
  }
}
let listaPreguntas = [];
function elaborarPreguntas(preguntas) {
  for (let pregunta of preguntas) {
    listaPreguntas.push(new Preguntas(pregunta.titulo, pregunta.respuestas, pregunta.solucion))
  }
}
elaborarPreguntas(preguntas)

console.log(listaPreguntas)
//Funcionalidad
let validar = validarRespuesta()
function validarRespuesta() {
  
let respuestaCorrecta = [];
  
  for(i=0; i<listaPreguntas; i++){
    respuestaCorrecta.push(pregunta.solucion[i])
  }
}
validarRespuesta()

console.log(validarRespuesta(respuestaCorrecta))
document
  .querySelector('form[name="dnd"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();

    let comprobaciones = [];

    for (let respuesta of Object.keys(respuestas)) {
      console.log(respuesta);
      let respuestaSeleccionada = "";
      for (let input of document.getElementsByName(respuesta)) {
        if (input.checked == true) {
          respuestaSeleccionada = input.value;
        }
      }
      if (respuestaSeleccionada == respuestas[respuesta]) {
        alert("Correcta");
      } else {
        alert("Incorrecta");
      }
    }
  });
*/