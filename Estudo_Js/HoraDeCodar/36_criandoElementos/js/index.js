var novoParagrafo = document.createElement("p");

let texto = document.createTextNode(
  "Texto criado, para conteudo do paragrado. Estudos de DOM"
);

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

let body = document.querySelector("body");
body.appendChild(novoParagrafo);

// Criando um elemento em container
let titleSecundario = document.createElement("h3");
let textoTitleSecundario = document.createTextNode(
  "Estudos de DOM como criar elementos"
);
titleSecundario.appendChild(textoTitleSecundario);
console.log(titleSecundario);

let container = document.querySelector(".container"); // capturando class container do HTML
container.appendChild(titleSecundario);

// modificando elemento ja criado
let subtitleH2 = document.querySelector(".subtitle");
let spanTitleH2 = document.createElement("span");
let textoSpan = document.createTextNode(" Este span foi criado com JavaScrip");
spanTitleH2.appendChild(textoSpan);
subtitleH2.appendChild(spanTitleH2);
// Usamos o querySelector para pegar a tag a ser usada, depois criamos variaveis com valores e armazenamos nas tags os valores com appendChild.
