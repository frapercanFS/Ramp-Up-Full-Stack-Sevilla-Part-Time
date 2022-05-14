let variableSinValor = undefined;
console.log(1,variableSinValor);

let booleano1 = true;
let booleano2 = false;
console.log(2,booleano1, booleano2);

const PI = 3.14;
console.log(3, PI);

const TAU = PI * 2;
console.log(4, TAU);

let booleanoAnd = booleano1 && booleano2;
console.log(5, booleanoAnd);

let booleanoNot = !booleano1;
console.log(6, booleanoNot);

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2) );
console.log(7,booleanoMix0);

let incrementarDesp = 2;
let resultadoDesp = 0;
resultadoDesp = incrementarDesp + 1;
console.log(8, resultadoDesp);

let incrementarAntes = 2;
let resultadoAntes = ++ incrementarAntes;
console.log(9, resultadoAntes);

for(let contarHasta10_2 = 0; contarHasta10_2 <= 10; contarHasta10_2++){
console.log( contarHasta10_2);
}

let postl = 0;
let postj = 0;


for(postj; postj <11; postj++){
    postl += postj;
}
console.log(postj, postl);

let sumaPares=0;
for (let i=0; i<10; i++ ){
    if (i%2==0) {
        sumaPares+=i;
    }
}

console.log(sumaPares);
// Variables 13-15

let variableValorNumerico = Math.floor(Math.random()*11);
console.log(variableValorNumerico);

const miNombre = "paul";

const miNumeroFav = 3;
// Booleanos 16-19

let booleanoOr = booleano1 ||  booleano2;
console.log(booleanoOr);

let booleanoMix1 = (booleano1 && (TAU/2 == PI) || (variableValorNumerico >= miNumeroFav));
console.log(booleanoMix1)

let seisNoEsNueve = 6 === 9;
console.log (seisNoEsNueve);

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -miNumeroFav*TAU;
console.log(booleanoMix2);


//Operadores 20-23

let valorSuma = miNumeroFav + variableValorNumerico;
console.log(20, valorSuma);

let valorResta = miNumeroFav - variableValorNumerico;
console.log(21, valorResta);

let valorMultiplicacion = miNumeroFav * variableValorNumerico;
console.log(22, valorMultiplicacion);

let valorDivision = miNumeroFav / 3;
console.log(22, valorMultiplicacion);

//Bucles 24-26

let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;

}
    console.log(24,contarHasta10);

let prel = 0;
let prej = 0;
let ii = 0;
/* while (prej < 11) {
    ++prej;
    prel += prej;
}
console.log(25, prej,prel); */

for (ii; ii <11; ii++) {
    prel += ++prej;
}
console.log("25b", prej, prel);
let sumaImpares = 0; 
let i = 0;
while (i < 10) {
    i++;
    if (i%2!=0) {
        sumaImpares +=i;
    }
}
console.log(26, sumaImpares);