let produtos = ["camisa-PP", "camisa-M", "camisa-G"];

let nn = produtos.map((produtosString) => {
  const [tipo, tamanho] = produtosString.split("-");
  return `Tipo: ${tipo}, Tamanho: ${tamanho}`;
});

console.log(nn);

// Esse arquivo foi criado para teste de como separar cada propiedade de um array com map e split
