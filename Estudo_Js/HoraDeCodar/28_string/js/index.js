// Estudos String

let nome = "Matheus";

console.log(nome.length); // Numero de caracteres

console.log(nome[2]); // indice 2 => 0 1 '2'.

let text = "A lua está brilhando";

console.log(text.indexOf("está"));

// Extrai algo apontado na string
let lua = text.slice(2, 5);
console.log(lua);

// Troca String por outra
let sol = text.replace("lua", "sol");

console.log(sol);

// PARTE 2
let filme = "a cabana";

let nomeUp = filme.toUpperCase();
console.log(nomeUp);

let viagemText =
  "O HOMEM NÃO PODE descobrir novos oceanos a não SER QUE tenha a coragem de perder a margem de vista.";

let viagemLower = viagemText.toLowerCase();
console.log(viagemLower);

// Retirar espaços em branco de uma string
let carModel = "    celta  ";

let carModelTrim = carModel.trim();

console.log(carModelTrim);

// Mandar como ARRAY

console.log(text.split(" "));
