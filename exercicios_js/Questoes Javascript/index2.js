//array de 30 posições com números gerados de forma randômica
// percorra o array e faça a soma de todos os números primos desse array;
let numberArray = [];

function numberRandom(min,max){ return Math.floor(Math.random() * (max - min) + min)};
for(let i = 0; i < 30; i++) { numberArray.push(numberRandom(0,100))};

function numberPrimo(num) {
    if(num!=1){
     for (var i = 2; i < num; i++)
       if (num % i == 0) return false;
     return num !== 1;
   }
};

const numerosFiltrados = numberArray.filter( valor => numberPrimo(valor) === true );

let soma = 0;
for (var i = 0; i < numerosFiltrados.length; i++) {
    soma += numerosFiltrados[i];
}

console.log(numberArray);
console.log(numerosFiltrados);
console.log(`Resultado da soma dos números primos: ${soma}.`);