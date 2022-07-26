const deepl = require('deepl-node');

const authKey = ""; // Replace with your key
const translator = new deepl.Translator(authKey);

const { writeFileSync, readFileSync } = require('fs');
let data = readFileSync('translation.json');
let traducciones = JSON.parse(data)


data = Object.entries(traducciones).map(entrada => {
    (async () => {
        const result = await translator.translateText(entrada[1], null, 'en-GB');
        traducciones[entrada[0]] = result.text
    })().then(() => writeFileSync('translation-es.json', JSON.stringify(traducciones)));

})



//https://www.npmjs.com/package/deepl-node


