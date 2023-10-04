function esperaAi(msg, tempo){

    // Funcao para retornar frase em determinado tempo;
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Bad value')

        setTimeout(()=>{
            console.log(msg);
            resolve();
        }, tempo);
    })

}


// Uso sem promise;
esperaAi('Boa noite', 1000)
    .then(resposta =>{
        // console.log(resposta)
        return esperaAi('Frase 1', 1000)
    })
    .then(resposta=> {
        // console.log(resposta)
        return esperaAi('Frase 2', 3000) // Todas outras etapas so seram executadas depois da ordem.
    })
    .then(resposta => {
        return esperaAi('Frase 3', 1000)
    })
    .then(()=>{
        return console.log('Fim')
    })
    .catch(e => {
        console.log('Erro: ',e)
    })
