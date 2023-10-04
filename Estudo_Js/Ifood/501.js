/*

// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

    const itensColetados = ['pedra', 'escudo', 'espada', 'magia'];
    const itemNecessario1 = 'pedra';
    const itemNecessario2 = 'escudo';
    const itemNecessario3 = 'espada';


    let itensBatalha = 0;
    // seu codigo aqui
    for(itens of itensColetados){
        console.log(itens);
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



*/

function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

    if (itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) && itensColetados.includes(itemNecessario3)) {
        return "PODE ENFRENTAR";
    }   else {
        return "NAO PODE ENFRENTAR";

    }
};

console.log(solucao(['carteira', 'caderno', 'magia', 'pedra', 'espada'],'magia', 'espada','pedra'));
