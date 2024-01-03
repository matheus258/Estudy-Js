let img = document.querySelector("img");

img.setAttribute("class", "imgAcender");

// https://img.freepik.com/vetores-gratis/lampada-realista-isolada_1284-41741.jpg

// Pegando o elemento Button e adicionando uma classe
let button = document.querySelector("button");
button.setAttribute("class", "buttonLigar");

let nomeButton = document.querySelector(".buttonLigar");
nomeButton.textContent = "Desligar";

let trocaDeImagem = true;

function mudarImg() {
  if (trocaDeImagem) {
    img.setAttribute(
      "src",
      "https://img.freepik.com/vetores-gratis/lampada-realista-isolada_1284-41741.jpg"
    );
    trocaDeImagem = false;
    nomeButton.textContent = "ligar";
  } else {
    img.setAttribute(
      "src",
      "https://img.freepik.com/fotos-premium/uma-lampada-acesa-com-uma-lampada-ao-fundo_745528-6572.jpg"
    );
    trocaDeImagem = true;
    nomeButton.textContent = "Desligar";
  }
}
