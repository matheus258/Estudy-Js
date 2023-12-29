console.log("Hello world");

// converter string para numero

const valorString = "12345";
const valorNumber = Number(valorString);

console.log(valorNumber);

// Manipulação de String
const frase = "Eu amo aprender JavaScript";
// Numero de Caractere
const numeroDeCaractere = frase.length;
// numero de palavras
const numeroDePalavras = frase.split(" ").length;

console.log(
  `Numero de caracteres: ${numeroDeCaractere}, numero de palavras: ${numeroDePalavras}`
);

// Criar array com 5 nomes e usar FOR para imprimir os nomes

const nomes = ["João", "Maria", "Pedro", "José", "Ana"];

// Primeira maneira;
for (nome of nomes) {
  console.log(nome);
}
// Segunda maneira;
for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1} ${nomes[i]}`);
}

// Funcao para especificar hora
function horario(horario24) {
  const [hora, minuto] = horario24.split(":");

  const hora12 = hora % 12 || 12;

  let periodo = "AM";

  if (hora > 12) {
    periodo = "PM";
  }

  console.log(`${hora12}:${minuto} ${periodo}`);
}

horario("12:22");
horario("22:16");
horario("03:04");
