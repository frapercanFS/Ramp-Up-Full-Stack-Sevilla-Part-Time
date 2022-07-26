const deepl = require('deepl-node');

const authKey = ""; // Replace with your key
const translator = new deepl.Translator(authKey);

const { writeFileSync, readFileSync } = require('fs');
let data = readFileSync('traduccion2-en.json');
let claves = Object.keys(JSON.parse(data));
let valores = Object.values(JSON.parse(data));
//let traduccion = {claves: valores}
for (let i=0; i<claves.length; i++) {

}
console.log(traduccion)



/* 
dataKeys = Object.keys(traducciones).map(entrada => {
    (async () => {
        const result = await translator.translateText(entrada[1], null, 'es-ES');
        traducciones[entrada[0]] = result.text
    }().then() => writeFileSync('traduccion2-es.json', JSON.stringify(traducciones)));

});

dataValues = Object.values(traduccion).map(entrada => {
    (async () => {
        const result = await translator.translateText(entrada, null, 'es-ES');
        traduccion[entrada] = result.text
    }).then(() => console.log(dataValues))

}) */

/* async function traducir(cadena) {
    const result = await translator.translateText(entrada, null, 'es-ES');
    return result.text

} */