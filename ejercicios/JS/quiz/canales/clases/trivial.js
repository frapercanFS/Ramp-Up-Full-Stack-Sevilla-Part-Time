export default class Trivial {
    constructor(preguntas) {
      this.preguntas = preguntas;
    }
    imprimePreguntas() {
      let htmlNuevo = "";
      for (let pregunta of this.preguntas) {
        htmlNuevo += pregunta.imprimePregunta(pregunta);
      }
      htmlNuevo += this.imprimeBotonSubmit();
      return htmlNuevo;
    }
    imprimeBotonSubmit() {
      return '<button type="submit">Comprobar</button> ';
    }
  }