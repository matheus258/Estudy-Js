function calcularIdade(anoNascimento){
    const data = new Date() //Gera data atual;

    const idade = data.getFullYear() - anoNascimento;
    return idade;
}

function calcaulaIdade2(anoNascimento){
    const data = new Date();

    const idade = data.getFullYear() - anoNascimento;

    console.log(idade)
}

// Função para calcular o tempo de vida
console.log(calcularIdade(1998));

