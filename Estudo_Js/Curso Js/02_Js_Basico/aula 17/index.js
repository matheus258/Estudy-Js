// FUNÇÕES

function saudacao(nome) {
    return `Bom dia! ${nome}!`;
}

const variavel = saudacao('Matheus');
console.log(variavel);

// Função para fazer soma
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(6,5))