const nome = "Marves";
const sobrenome = "Souza";
const idade = 25;

const nomeSec = "Souza";

// Quando se usa === ou !== Alem de comparar se a variavel é igual ao valor, tambem é comparado o tipo da variavel se corresponde ao mesmo que está sendo comparado.

if (nome === sobrenome) {
  console.log(
    "O tipo do nome e sobrenome são iguais no valor e no tipo. String"
  );
}
if (sobrenome === nomeSec) {
  console.log("A variável 'nome' é igual a 'nomeSec'.");
}
if (nome === idade) {
  console.log("A variável 'idade' é igual a 'nome'. Number");
}
if (nome !== idade) {
  console.log("O tipo de Numero é diferente do nome, pois são String e Number");
}
