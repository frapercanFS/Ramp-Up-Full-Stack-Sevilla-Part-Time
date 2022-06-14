// Antes de REDUCE
// let lista = [2,-1,1,3,5,8];
// let acumulacion = 0;

// for (let i = 0; i < lista.length; i++) {
//     acumulacion += lista[i];
// }
// console.log(acumulacion); // 18

// // Usando REDUCE
let lista = [-2,1,1,3,5,8];
let acumulado = lista.reduce(function(anterior, actual, indice, vector){
    console.log(anterior,actual,indice,vector)
  return anterior + actual;
});
console.log(acumulado); // 18