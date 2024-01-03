// function callback
const inserirNome = (cb) => {
  let nome = "Matheus";
  cb(nome);
};

const funNome = (nome) => {
  console.log(`Olá, ${nome}! tudo bem?`);
};

inserirNome(funNome);
