function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(msg);
        resolve();
        }, tempo);
    });

}

esperaAi('olá, tudo bem?', 1000)
    .then(resposta => {
        return esperaAi('espere um momento para finalizarmos seus cadastro.', 2000);
    })
    .then(resposta => {
        return esperaAi('Ultimo a ser exibido.', 3000);
    })
    .catch();
