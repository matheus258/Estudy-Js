// Adicionando Elementos
let elemento = document.createElement("div");

// criando classe para elemento
elemento.classList = "div-criada";
console.log(elemento);

let container = document.querySelector(".container");

container.appendChild(elemento);

// inserir antes
let el2 = document.createElement("div");
el2.classList = "div-criada2";
console.log(el2);

container.insertBefore(el2, elemento);
// Desse modo o el2 vai estar antes de elemento

const nome = {
  nome: "joao",
};
