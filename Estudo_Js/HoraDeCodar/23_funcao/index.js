// Estudo de funcao

// Esta é uma função simples para resumo!
function ola() {
  console.log("Olá, Mundo!");
}

// Aqui eu chamei a função acima e ela executou o que estava dentro dela!
ola();

/* Agora vamos criar uma função mais complexa. Essa função irá receber um parâmetro (nome)
e retornará "Olá, [Nome]!" */
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("João"));
