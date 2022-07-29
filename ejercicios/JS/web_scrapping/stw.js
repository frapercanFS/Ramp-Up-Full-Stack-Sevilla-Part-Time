const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

let jsonFile = fs.readFileSync('stw-data.json');
console.log(jsonFile);
async function extraerPagina(pagina) {
    const pageContent = await axios.get(`https://www.meneame.net/${pagina}`);
    const $ = cheerio.load(pageContent.data);
    const titulos = $('h2').map((_, titulo) => {
        titulo = $(titulo);
        return titulo.text()
    }).get();
    const parrafos = $('p').map((_, parrafo) => {
        parrafo = $(parrafo);
        return parrafo.text()
    }).get();
    let tiempos = $('div[class="info"]').find('div > span').map((_, tiempo) => {
        tiempo = $(tiempo);
        return tiempo.html()
    }).get();
    let a = ' a ';
    tiempos = tiempos.filter(item => !a.includes(item));
/*     paginasInfo.push(titulos);
    paginasInfo.push(parrafos);
    paginasInfo.push(tiempos) */
    /*     console.log(titulos)
        console.log('-------------------')
        console.log(parrafos)
        console.log('-------------------')
        console.log(tiempos)
        console.log('*************') */
}

for (pagina = 1; pagina < 2; pagina++)  (extraerPagina(pagina))