function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let variableValorNumerico = getRndInteger(0, 999999999);
const miNombre = "stewart";
const miNumeroFav = 44;
console.log(13, variableValorNumerico, miNombre, miNumeroFav);

const pi = 3.14;
const tau = pi * 2;

booleano1 = true;
booleano2 = false;
booleanoOr = booleano1 || booleano2;

booleanoMix1 = (booleano1 && (pi == tau / 2)) || (variableValorNumerico >= miNumeroFav);
console.log(17, booleanoOr, booleanoMix1);

let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < (MiNumeroFav * tau);
console.log(19, variableValorNumerico, booleanoMix2);

let valorSuma = miNumeroFav + variableValorNumerico;
let valorResta = miNumeroFav - variableValorNumerico;
let valorMultiplicacion = miNumeroFav * variableValorNumerico;
let valorDivision = miNumeroFav / variableValorNumerico;

let contarHasta10 = 0;
do {
    contarHasta10++;
    console.log(contarHasta10)
} while (contarHasta10 != 10)

let preI = 0;
let preJ = 0;


do {
    preJ++;
    preI += preJ;
    console.log(25, preI)
} while (preJ < 11);

let sumaImpares = 0;
let i = 0;

for (i; i < 10; i++)
    if (i % 2 == 1) {
        sumaImpares += i;
    }
console.log(26, sumaImpares);