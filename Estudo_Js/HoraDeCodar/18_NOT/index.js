// ESTUDOS DE NOT ou !==
// O operador "!=" é o oposto de "==". Ele retorna true se os valores forem diferentes e false caso
// contrário.

const camisa = "G";
const idade = 25;
const nome = "Matheus";
const negacaoTeste = false;

if (!negacaoTeste) {
  console.log("O valor é FALSO e passou no teste");
}
if (!(camisa == "M") && idade === 25 && !(nome === "Judas")) {
  console.log("Todos os testes passaram");
}
