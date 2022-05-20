const pregunta = {
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
  solucion:"clint-eastwood"
};




function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);
  newHTML += imprimeBotonSubmit();

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return "<p>".concat(pregunta.titulo, "</p>");
}

function imprimeTodasLasRespuestas(pregunta) {
  let composicion = []
  for(let respuesta of pregunta.respuestas){
    composicion.push(imprimeUnaRespuesta(respuesta))
  }
  return composicion.toString().replace(/,/g," ")
}

function imprimeUnaRespuesta(respuesta) {
  // let composicion = ""
  // composicion.push(imprimeLabel(respuesta))
  // composicion.push(imprimeInput(respuesta))

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

function imprimeBotonSubmit(){
  return '<button type="button" onclick="comprobar(pregunta)">Comprobar</button> '
}

function comprobar(pregunta){
  
  console.log(document.getElementById(pregunta.solucion).checked)
  if (document.getElementById(pregunta.solucion).checked){
    alert("Correcto");
  }
  else{
    alert("Incorrecto");
  }
}



document.getElementById("contenedorPreguntas").innerHTML =
  imprimePregunta(pregunta);
