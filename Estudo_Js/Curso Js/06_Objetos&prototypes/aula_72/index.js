// Object.defineProperty() -> Getter e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== Number){
                console.log("Bad Value, no is it Number.");
                return;
            };
        }
    });
}

const p1 = new Produto('Camiseta', 20, 5);
console.log(p1);
