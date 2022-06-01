export function escogerPreguntasAleatorias(preguntas, numeroPreguntas) {
  let preguntasPorEscoger = preguntas;
  let escogidas = [];

  while (escogidas.length != numeroPreguntas) {
    let indiceEscogida = Math.floor(Math.random()* preguntasPorEscoger.length) ;
    escogidas.push(preguntasPorEscoger[indiceEscogida]);
    preguntasPorEscoger.splice(indiceEscogida);



  }
  console.log(escogidas)
  return escogidas;
}
