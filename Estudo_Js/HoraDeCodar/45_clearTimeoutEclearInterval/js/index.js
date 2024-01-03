// Criar variavel com a funcao
let x = 0;
let myTime = setTimeout(function () {
  console.log(`o x é igual a ${x}`);
}, 1500);

x = 5;

if (x > 0) {
  clearInterval(myTime);
  console.log("O x passou de 0");
}

// clearIntervall

let myInterval = setInterval(function () {
  console.log("imprimindo intervalo");
}, 500);

setTimeout(function () {
  console.log("Encerramento de repetição!");
  clearInterval(myInterval);
}, 2000);
