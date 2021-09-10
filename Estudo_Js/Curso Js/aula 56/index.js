function criaPessoa(nome, sobrenome,altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Rebeca', 'Alcantara', 1.55, 60);
console.log(p1.fala('Falando sobre os casos de covid'));
console.log(p1.imc());

const p2 = criaPessoa('João', 'Lucas', 1.90, 80);
console.log(p2.fala('fazendo barulho na sala'));
console.log(p2.imc());