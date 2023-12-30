// OR ou || uma das condições tem quer ser TRUE para entrar no codigo.

const nome = "Rayane";
if (nome === "Tati" || nome == Number) {
  console.log("Olá Tati!");
}
if (nome === "Rayane" || nome !== String) {
  console.log("Condição 2: Você não é Tati! Bem vinda Rayane.");
}
if (typeof nome === "string" || nome.length > 6) {
  console.log("Seu nome possui mais de 6 letras ou é uma string");
}
