function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(msg);
        }, tempo);
    });

}

/* esperaAi('olá, tudo bem?', 1000)
    .then(e => {
        return esperaAi('espere um momento para finalizarmos seus cadastro.', 2000);
    })
    .then(e => {
        return esperaAi('Ultimo a ser exibido.', 3000);
    })
    .catch();
 */
// Promises.all Promise.race Promise.resolve Promise.reject

 const promises = [
    'Primeiro Valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    'outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    })
