// Avançado em JavaScript

// Manipuklando Array
let frutas = ["Maça", "Uva"];

frutas.unshift("Acerola"); // Adiciona no começo
frutas.push("kiwi"); // Adiciona no Fim

console.log(frutas);

frutas.shift(); // Remove o primeiro elemento
frutas.pop(); // Remove o ultimo elemento
console.log(frutas);

// map, filter, reduce

const numeros = [1, 2, 3, 4, 5, 6, 7];

const numeroPar = numeros.find((num) => num % 2 == 0); // Retorna Primeiro Resuldado
console.log(numeroPar);

// Retorna todos pares
const numerosPares = numeros.filter((num) => {
  return num % 2 == 0;
});

console.log(numerosPares);

// Map

let listaDePessoas = [
  "Jonas@gmail.com",
  "Marcos@gg.br",
  "Luizall@outlook.com",
  "Felipe@contatoempresa.com.br",
  "Beatrizpp@live.com",
];

let novos;
novos = listaDePessoas.map((email) => {
  return { email: email, nota: 10 };
});
console.log(novos);

// ForEach
const enviarEmail = (objetoEmail) => {
  console.log(
    `Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso`
  );
};

novos.forEach((objetoEmail) => enviarEmail(objetoEmail));
