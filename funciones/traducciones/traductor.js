const deepl = require("deepl-node");

const authKey = "92766a66-fa2a-b1c6-d7dd-ec0750322229:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

const { writeFileSync, readFileSync } = require("fs");
let data = readFileSync("traduccion_lvl2.json");
let traducciones = JSON.parse(data);

data = Object.entries(traducciones).map((entrada) => {
  let clave = entrada[0];
  let valor = entrada[1];

  if (traducciones[clave] instanceof String) {
    traducir(valor)
      .then((cadenaTraducida) => (traducciones[clave] = cadenaTraducida))
      .then(() =>
        writeFileSync("translation-es.json", JSON.stringify(traducciones))
      );
  } else {
    DatosNivelDos = traducciones[clave];
    if (traducciones[clave] instanceof String) {
      Object.entries(DatosNivelDos).map((entradaDos) => {
        let claveDos = entradaDos[0];
        let valorDos = entradaDos[1];

        traducir(valorDos)
          .then(
            (cadenaTraducidaDos) =>
              (traducciones[clave][claveDos] = cadenaTraducidaDos)
          )
          .then(() =>
            writeFileSync("translation-es.json", JSON.stringify(traducciones))
          );
      });
    }
  }
});

//https://www.npmjs.com/package/deepl-node
async function traducir(cadena) {
  const result = await translator.translateText(cadena, null, "ES");
  return result.text;
}
