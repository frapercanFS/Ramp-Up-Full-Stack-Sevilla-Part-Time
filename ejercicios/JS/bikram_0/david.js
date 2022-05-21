console.log("Ejercicio 1")
/*1.- Crear variable tipo let de nombre variableSinValor declarada sin valor*/

let variable = undefined;
console.log(1,variable);

console.log()
console.log("Ejercicio 2")

/*2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos*/

let booleano1 = true;
let booleano2 = false;
console.log(2,"booleano1 = "+booleano1+" y booleano2 = "+booleano2);

console.log()
console.log("Ejercicio 3")

/*3.- Crear variable tipo const de nombre PI declarada con valor 3.14*/

const pi = 3.141592;
console.log(3,pi);

console.log()
console.log("Ejercicio 4")

/*4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI*/

const TAU = 2*pi;
console.log(4,TAU);

console.log()
console.log("Ejercicio 5")

/*5.- Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2*/

var booleanoAnd = booleano1&&booleano2;
console.log(5+", el valor de booleanoAnd debe de ser "+booleanoAnd);

console.log()
console.log("Ejercicio 6")

/*6.- Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1*/

let booleanoNot = !booleano1;
console.log(6+", el valor de booleanoAnd debe de ser "+booleanoNot);

console.log()
console.log("Ejercicio 7")

/*7.- Crear variable booleanoMix0 cuyo valor sea la compración booleana 
(booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)*/

var booleanoMix0 = (booleano1||booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log(7+", el valor de booleanoMix0 debe de ser "+booleanoMix0);

console.log()
console.log("Ejercicio 8")

/* 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp*/

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp+1;
console.log(8+", El valor de resultadoDesp es "+resultadoDesp+" y incrementarDesp es "+incrementarDesp);
console.log("8 BIS,  Una solución mas corta sería decir directamente que resltadoDesp es "+(++incrementarDesp));

/* No me queda claro si pide esto o habria que hacer un for para que incrementarDesp siga valiendo 2*/

console.log()
console.log("Ejercicio 9")

/*9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes*/

var incrementarAntes=2;
++incrementarAntes; console.log("9.1 "+incrementarAntes);
++incrementarAntes; console.log("9.2 "+incrementarAntes);
++incrementarAntes; console.log("9.3 "+incrementarAntes);

console.log()
console.log("Ejercicio 10")
/*10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique
que contarHasta10_2 === 10*/

for (var contarHasta10_2=0; contarHasta10_2 < 10; contarHasta10_2 ++)
console.log("Valores de la variable son: "+contarHasta10_2);

console.log()
console.log("Ejercicio 11")
/*11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada 
iteración se deberá sumar al valor de postI el valor de postJ++*/

var postI = 0;
var postJ = 0;
do {
    postJ++;
    postI+=postJ;
}while(postJ<11);
console.log(postI,postJ);

/*var postI = 0;
var postJ = 0;
for (postJ; postJ<11; postJ++)¨{    postJ++;
    postI+=postJ;
console.log(postI,postJ);}

var postI = 0;
var postJ = 0;
while (postJ<11;){    postJ++;
    postI+=postJ;
console.log(postI,postJ);}*/

console.log()
console.log("Ejercicio 12")
/*12.- Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) 
si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)*/


/* El do realiza la operación antes de la comprobación while
var i = 0;
var sumaPares = 0;
do {i=i+2; sumaPares+=i;}
while (i<10)
console.log(sumaPares);*/

var sumaPares = 0;
for(i=0; i<10; i++) {
    if(i%2==0) {sumaPares+=i;i++;}
    else {i++;}
}
console.log(sumaPares);

console.log()
console.log("Ejercicio 13")
/*13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera*/

var variableValorNumerico = Math.floor((Math.random() * (99-0))+0);

console.log(variableValorNumerico);

console.log()
console.log("Ejercicio 14")
//14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre

let MiNombre = "David";
console.log(MiNombre)

console.log()
console.log("Ejercicio 15")
//15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MiNumeroFav = 7;
console.log(MiNumeroFav)

console.log()
console.log("Ejercicio 16")
//16.- Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2

let booleanoOr = booleano1 || booleano2;
console.log(booleanoOr)
console.log()
console.log("Ejercicio 17")
/*17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI))
or (variableValorNumerico mayor o igual que MiNumeroFav)*/

let booleanoMix1 = (booleano1 && (TAU/2 == pi)) || (variableValorNumerico >=MiNumeroFav);
console.log(booleanoMix1)
console.log()
console.log("Ejercicio 18")
//18.- Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9

let seisNoEsNueve = (6===9);
console.log(seisNoEsNueve)

console.log()
console.log("Ejercicio 19")
/*19.- Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido)
o menor que -(MiNumeroFav * TAU)*/

let booleanoMix2 = (variableValorNumerico > 0) || ((variableValorNumerico > 0) < (MiNumeroFav * TAU));
console.log(booleanoMix2)

console.log()
console.log("Ejercicio 20")
//20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico

let valorSuma = MiNumeroFav + variableValorNumerico;
console.log(valorSuma)

console.log()
console.log("Ejercicio 21")
//21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico

valorResta = MiNumeroFav + variableValorNumerico;
console.log(valorResta)

console.log()
console.log("Ejercicio 22")
//22.- Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico

let valorMultiplicación = MiNumeroFav + variableValorNumerico;

console.log(valorMultiplicación)
console.log()
console.log("Ejercicio 23")
//23.- Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3

let valorDivisión = MiNumeroFav + variableValorNumerico;
console.log(valorDivisión)

console.log()
console.log("Ejercicio 24")
//24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10

var contarHasta10 = 0;
while (contarHasta10 < 10){
contarHasta10++;
console.log(contarHasta10)}

console.log()
console.log("Ejercicio 25")
/*25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. 
En cada iteración se deberá sumar al valor de preI el valor de ++preJ*/

preI = 0;
preJ = 0;
for(preJ; preJ<11;preJ++)
{preI+=preJ};
console.log(preI,preJ)

console.log()
console.log("Ejercicio 26")
/*26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) 
si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)*/

let sumaImpares = 0;
for(i=0; i<10; i++) {
    if(i%2==1) {i++;}
    else {sumaImpares+=i;i++;}
}
console.log(sumaImpares)
