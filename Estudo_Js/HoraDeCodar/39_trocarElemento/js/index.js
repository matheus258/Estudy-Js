// Modificando elementos
let el = document.createElement("h3");
el.classList = "testando-class";
console.log(el);

let texto = document.createTextNode("Texto do H3, para estudos de DOM");
el.appendChild(texto);

// document.body.appendChild(el);

// Selecionando o elemento que quero trocar
let troca = document.querySelector(".escopo");
console.log(troca);

// Pai
let pai = troca.parentNode; //document.querySelector("body");
console.log(pai);

// Troca de elemento
pai.replaceChild(el, troca);
