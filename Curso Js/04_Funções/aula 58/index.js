function Carro() {
    this.fabricante = "Ferrari";
    this.cor = "Vermelho";
}

var carro = Carro();

function Moto(marca, cor){
    this.marca = marca;
    this.cor = cor;
    this.saberCor = function(){
        console.log(`Cor da moto: ${cor}. `)
    };
    this.mostrarModelo = function(){
        console.log(`Modelo: ${marca}.`)
    }
}

let mot1 = new Moto('honda','Vermelha');

mot1.mostrarModelo();