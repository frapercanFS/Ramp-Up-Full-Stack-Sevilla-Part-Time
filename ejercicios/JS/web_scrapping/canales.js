const axios = require("axios");
const cheerio = require("cheerio");
var lodash = require("lodash");

const csv = require("fast-csv");
const fs = require("fs");


const csvFile = fs.createWriteStream('prueba.csv');

const csvStream = csv.format({ headers: true });


async function extraerPagina(pagina) {
  const pageContent = await axios.get(`https://www.meneame.net/${pagina}`);
  const $ = cheerio.load(pageContent.data);

  const titulos = $("h2")
    .map((i, el) => {
      el = $(el);
      csvStream.write({ titulo: el.text(), header2: "row1-col2" });
      return el.text();
    })
    .get();
}

// extraerPagina(0)

paginas = lodash.range(1, 50);

for (pagina of paginas) {
  extraerPagina(pagina);
}

csvStream.pipe(csvFile).on("end", (file) => {
    process.exit();
  });
  