

function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

    // seu codigo aqui
    let itensBatalha = 0;

    for(itens of itensColetados){
        if (itens == itemNecessario1 || itens == itemNecessario2 || itens == itemNecessario3){
            itensBatalha ++;
        }
    }

    if(itensBatalha == 3){
        return 'PODE ENFRENTAR';
    } else {
        return 'NAO PODE ENFRENTAR';
    }
    // fim do seu codigo

}

console.log(solucao(['carteira', 'caderno', 'magia', 'pedra', 'espada'],'magia', 'espada','pedra'));