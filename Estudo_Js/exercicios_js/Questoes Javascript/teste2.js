let numberArray = [];

//Funcao gerar Numeros;
function numberRandom(min,max){ return Math.floor(Math.random() * (max - min) + min)};
for(let i = 0; i < 30; i++) { numberArray.push(numberRandom(0,1000))};

//Funcao getter Numeros primos
function numberPrimo(num) {
    if(num!=1){
     for (var i = 2; i < num; i++)
       if (num % i == 0) return false;
     return num !== 1;
   }
};

const numerosFiltrados = numberArray.filter( valor => numberPrimo(valor) === true );

//Soma dos numeros Primos
var soma = numerosFiltrados.reduce(function(soma, i){
    return soma + i;
});

console.log(`Array Completo: `);
console.log(numberArray);
console.log(`Números primos do array: `);
console.log(numerosFiltrados);
console.log(`Resultado da soma dos números primos: ${soma}.`);