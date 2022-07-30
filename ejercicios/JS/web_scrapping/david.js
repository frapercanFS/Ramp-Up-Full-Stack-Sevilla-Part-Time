const axios = require('axios');
const cheerio = require('cheerio');
const fastcsv = require("fast-csv");
const fs = require("fs");
const file = fs.createWriteStream("noticia.csv");


//console.log("HoraReal "+hora+":"+minutos+" "+dia+"/"+mes+"/"+año)

let segundos = 1000;
let minutos = 60 * segundos;
let horas = 60 * minutos;
let dias = 24 * horas;
let anos = 365 * dias;




let tiempo = Date.now();
fechaActual = new Date(tiempo)

console.log("fechaActual: "+fechaActual)
async function extraerPagina(pagina) {

    const pageContent = await axios.get(`https://www.meneame.net/${pagina}`);
    const $ = cheerio.load(pageContent.data);

    const datosRequeridos = $('div.horizontal').map((_, el) => {
        el = $(el);

        const spanPublicado = el.find('span').text().split(" ", 8)
        const digitoTiempo = spanPublicado[2];
        const medidasTiempo = spanPublicado[3];
        const hace = digitoTiempo + " " + medidasTiempo;



      if (medidasTiempo == "segundos") {

            incrementoSeg = digitoTiempo * segundos
            tiempoSeg = tiempo - incrementoSeg
            fechaPublicacion = new Date(tiempoSeg)
            console.log("segundos " + digitoTiempo, medidasTiempo, "fechaPublicacion: " + fechaPublicacion)
        }

        if (medidasTiempo == "minutos") {

            incrementoMin = digitoTiempo * minutos
            tiempoMin = tiempo - incrementoMin
            fechaPublicacion = new Date(tiempoMin)
            console.log("minutos " + digitoTiempo, medidasTiempo, "fechaPublicacion: " + fechaPublicacion)
        }

        if (medidasTiempo == "horas") {
            incrementoHr = digitoTiempo * horas 
            tiempoHr = tiempo - incrementoHr
            fechaPublicacion = new Date(tiempoHr)
            console.log("horas " + digitoTiempo, medidasTiempo, "fechaPublicacion: " + fechaPublicacion)
        }

        if (medidasTiempo == "dias") {
            incrementoDia = digitoTiempo * dias
            tiempoDia = tiempo - incrementoDia
            fechaPublicacion = new Date(tiempoDia)

            console.log("dias " + digitoTiempo, medidasTiempo, "fechaPublicacion: " + fechaPublicacion)

        }

        // console.log(1, tiempo, "fechaActual: " + fechaActual, "Datos publicacion " + digitoTiempo, medidasTiempo, fechaPublicacion)

        const titulo = el.find('h2').text();
        const subTitulo = el.find('p').text()

         return { fechaActual, fechaPublicacion, hace, titulo, subTitulo };

    }).get()

     console.log(datosRequeridos)
    fastcsv.write(datosRequeridos, { headers: true }).pipe(process.stdout); // --ver por consola 
    // fastcsv.write(datosRequeridos, { headers: true }).pipe(file);
}

 const pagina = [...Array(30).keys()];


for (const key of pagina) {
    extraerPagina(key);
}  
extraerPagina('')
