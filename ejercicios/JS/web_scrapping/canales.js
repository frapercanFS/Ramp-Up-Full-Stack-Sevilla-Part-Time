
const axios = require('axios');
const cheerio = require('cheerio');



async function extraerPagina(pagina) {
    const pageContent = await axios.get(`https://www.meneame.net/${pagina}`);
    const $ = cheerio.load(pageContent.data);

    const titulos = $('h2').map((_, el) => {
        el = $(el);
        console.log(el.text())
        console.log('-------------------')
    }).get();
}

extraerPagina('')
